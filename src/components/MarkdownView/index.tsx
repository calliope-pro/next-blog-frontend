import style from './md-view.module.scss';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRecoilValue } from 'recoil';
import remarkGfm from 'remark-gfm';
import { Box } from '@mui/material';

import { CodeContainer } from './CodeContainer';
import { isDarkState } from '../../atoms/codeStyleAtom';

export const MarkdownView: React.FC<{ body: string }> = ({ body }) => {
  // codeのカラーモード
  const isDark = useRecoilValue(isDarkState);

  return (
    <Box>
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
                style={(isDark ? okaidia : prism) as string}
                language={match[1]}
                PreTag={CodeContainer}
                showLineNumbers={true}
                filename={match[2]}
                fileExtension={match[1]}
                customStyle={{ padding: '25px 1rem 22px 1rem' }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              // inlinecodeの時
              <code className={style['inline-code']} {...props}>
                {children}
              </code>
            );
          },
          // h1は目次用にid付加・headerに隠れないようにsx設定
          h1: ({ children, node }) => (
            <Box
              component="h1"
              id={String(node.position?.start.line)}
              sx={{ scrollMarginTop: { xs: '135px', sm: '95px' } }}
            >
              {children}
            </Box>
          ),
          img: ({ node }) => (
            <Image
              src={node.properties!.src as string}
              alt={node.properties!.alt as string}
              quality={90}
              width="100%"
              height="40%"
              layout="responsive"
              objectFit="contain"
            />
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </Box>
  );
};
