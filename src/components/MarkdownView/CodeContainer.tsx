import { Fira_Code } from 'next/font/google';
import { useRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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

const firaCodeFont = Fira_Code({ weight: '400', subsets: ['latin'] });

export const CodeContainer: React.FC<PropType> = (props) => {
    const [isDark, setIsDark] = useRecoilState(isDarkState);
    const filename: string | undefined = props.filename;
    const fileExtension: string | undefined = filename
        ? filename.slice(1, -1)
        : FILE_EXTENSIONS[props.fileExtension.toLocaleLowerCase()];
    const currentUrl = useCurrentAbsUrl();

    return (
        <Box {...props} sx={{ '& *': firaCodeFont.style }} position="relative">
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
                        top: '24px',
                        right: 'calc(1em)',
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
                        top: '24px',
                        right: 'calc(2em + 16px)',
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
