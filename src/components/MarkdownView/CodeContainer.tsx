import { useRecoilState } from 'recoil';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { isDarkState } from '#src/atoms/codeStyleAtom';
import { COLORS } from '#src/styles';
import { useCurrentAbsUrl } from '#src/utils/hooks';

const FILE_EXTENSIONS: { [lang: string]: string } = {
    python: '.py',
    py: '.py',
    javascript: '.js',
    js: '.js',
    jsx: '.jsx',
    typescript: '.ts',
    ts: '.ts',
    tsx: '.tsx',
    html: '.html',
    css: '.css',
    scss: '.scss',
};

type PropType = {
    filename?: string;
    fileExtension: string;
    node: Element;
};

export const CodeContainer: React.FC<PropType> = (props) => {
    const [isDark, setIsDark] = useRecoilState(isDarkState);
    const filename: string | undefined = props.filename;
    const fileExtension: string | undefined = filename
        ? filename.slice(1, -1)
        : FILE_EXTENSIONS[props.fileExtension.toLocaleLowerCase()];
    const currentUrl = useCurrentAbsUrl();

    return (
        <Box position="relative" sx={{ marginTop: '60px' }} {...props}>
            {fileExtension && (
                <Typography
                    variant="subtitle2"
                    sx={{
                        padding: '1px 5px',
                        top: '0px',
                        right: 'calc(6% - 20px)',
                        position: 'absolute',
                        border: `2px solid ${COLORS.mainColor}`,
                        borderTop: 'none',
                        borderRadius: '0 0 5px 5px',
                        zIndex: 500,
                    }}
                >
                    {fileExtension}
                </Typography>
            )}

            <Tooltip title="invert style" placement="top">
                <IconButton
                    onClick={() => setIsDark((prev) => !prev)}
                    sx={{
                        top: '20px',
                        right: 'calc(13% - 20px)',
                        position: 'absolute',
                        zIndex: 500,
                        color: isDark ? 'rgb(248, 248, 242)' : 'default',
                    }}
                >
                    <LightModeIcon fontSize="small" />
                </IconButton>
            </Tooltip>

            <Tooltip title="copy" placement="top">
                <IconButton
                    onClick={async () => {
                        const code = (
                            props.node.children[0] as unknown as {
                                type: string;
                                value: string;
                            }
                        ).value;
                        await navigator.clipboard.writeText(
                            `"Copied from ${currentUrl}"\n\n${code}`,
                        );
                    }}
                    sx={{
                        top: '20px',
                        right: 'calc(14% + 11px)',
                        position: 'absolute',
                        zIndex: 500,
                        color: isDark ? 'rgb(248, 248, 242)' : 'default',
                    }}
                >
                    <ContentCopyIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            {props.children}
        </Box>
    );
};
