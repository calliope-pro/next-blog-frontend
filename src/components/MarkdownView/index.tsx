import style from './md-view.module.scss';

import { Fira_Code } from 'next/font/google';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRecoilValue } from 'recoil';
import remarkGfm from 'remark-gfm';
import Box from '@mui/material/Box';

import { CodeContainer } from './CodeContainer';
import { LinkCard } from '#src/components/LinkCard';
import { isDarkState } from '#src/atoms/codeStyleAtom';
import { useMemo } from 'react';
import NextLink from 'next/link';
import { Link as MuiLink, Typography } from '@mui/material';
import { COLORS } from '#src/styles';

const firaCodeFont = Fira_Code({ weight: '500', subsets: ['latin'] });

export const MarkdownView: React.FC<{ body: string }> = ({ body }) => {
    // codeのカラーモード
    const isDark = useRecoilValue(isDarkState);
    const syntaxStyle = useMemo(() => (isDark ? okaidia : prism), [isDark]);

    return (
        <ReactMarkdown
            className={style.mdView}
            remarkPlugins={[remarkGfm]}
            components={{
                code({ inline, className, children, ...props }) {
                    const match = /^language-(\w+)(\[[\x20-\x7e]+?\])?$/.exec(
                        className || '',
                    );
                    return !inline && match ? (
                        // codeblockの時
                        <SyntaxHighlighter
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            style={syntaxStyle}
                            language={match[1].toLowerCase()}
                            PreTag={CodeContainer}
                            showLineNumbers
                            filename={match[2]}
                            fileExtension={match[1]}
                            customStyle={{ padding: '25px 1rem 22px 1rem' }}
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        // inlinecodeの時
                        <Box
                            component="code"
                            className={firaCodeFont.className}
                            whiteSpace="break-spaces"
                            sx={{
                                background:
                                    'linear-gradient(transparent 60%, #ff6 60%)',
                                marginX: '2px',
                            }}
                            {...props}
                        >
                            {children}
                        </Box>
                    );
                },
                // h1は目次用にid付加・headerに隠れないようにsx設定
                h1: ({ children, node }) => (
                    <Box
                        component="h1"
                        mt={12}
                        sx={{ scrollMarginTop: { xs: '135px', sm: '95px' } }}
                    >
                        <MuiLink
                            component={NextLink}
                            color={COLORS.accentDarkColor}
                            underline="hover"
                            variant="h5"
                            id={String(node.position?.start.line)}
                            href={`#${String(node.position?.start.line)}`}
                            sx={{
                                ':hover': {
                                    '::after': {
                                        content: '" #"',
                                        opacity: 1,
                                        transition: 'opacity 1s',
                                    },
                                },
                            }}
                        >
                            {String(children)}
                        </MuiLink>
                    </Box>
                ),
                h2: (props) => {
                    return <Box component="h2" {...props} />;
                },
                img: ({ src, alt }) => (
                    <Box
                        component="img"
                        display="block"
                        src={src as string}
                        alt={alt as string}
                        sx={{ objectFit: 'contain' }}
                        width={{ lg: '60%', md: '70%', xs: '80%' }}
                        mx="auto"
                        my={2}
                    />
                ),
                a: ({ children, href }) => (
                    <LinkCard href={href as string}>{children}</LinkCard>
                ),
            }}
        >
            {body}
        </ReactMarkdown>
    );
};
