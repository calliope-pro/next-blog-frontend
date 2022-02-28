import style from './md-editor.module.scss';

import { useState, useContext, useRef } from 'react';
import { Alert, Box, Button, Snackbar, TextareaAutosize } from '@mui/material';

import { blogDataContext } from './contexts';
import { adminPostBlog } from '#src/utils/backendApi';

export const MarkdownEditor: React.FC = () => {
  // saveされたか
  const [isSaved, setIsSaved] = useState(false);

  // markdown textareaの参照
  const contentRef = useRef<HTMLTextAreaElement>(null!);

  const blogData = useContext(blogDataContext);

  // バックエンドへ保存
  const saveBlogData = async () => {
    blogData?.setBlogDataContextValue((prev) => {
      prev.content = contentRef.current.value;
      return prev;
    });
    console.log(blogData);
    await adminPostBlog(blogData!.blogDataContextValue);
    setIsSaved(() => true);
  };

  // ショートカットキー
  const handleShortcutKey = async (e: React.KeyboardEvent) => {
    // ctrl + sでsave
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      await saveBlogData();
    }
    // ctrl + ]でインデント
    if (e.ctrlKey && e.key === ']') {
      let cursorPosition = contentRef.current.selectionStart;
      const cursorRow = contentRef.current.value
        .substring(0, cursorPosition)
        .split('\n').length;
      const bodies = contentRef.current.value.split('\n');
      bodies[cursorRow - 1] = '  ' + bodies[cursorRow - 1];
      cursorPosition += 2;
      contentRef.current.value = bodies.join('\n');
      contentRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
    // ctrl + [でインデント削除
    if (e.ctrlKey && e.key === '[') {
      let cursorPosition = contentRef.current.selectionStart;
      const cursorRow = contentRef.current.value
        .substring(0, cursorPosition)
        .split('\n').length;
      const bodies = contentRef.current.value.split('\n');
      if ('  ' === bodies[cursorRow - 1].substring(0, 2)) {
        bodies[cursorRow - 1] = bodies[cursorRow - 1].substring(2);
        cursorPosition -= 2;
      }
      contentRef.current.value = bodies.join('\n');
      contentRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  };

  return (
    <Box>
      <Snackbar
        open={isSaved}
        autoHideDuration={6000}
        onClose={() => setIsSaved(() => false)}
      >
        <Alert
          variant='filled'
          onClose={() => setIsSaved(() => false)}
          severity='success'
        >
          Saved Successfully!
        </Alert>
      </Snackbar>

      <TextareaAutosize
        className={style.mdEditor}
        maxRows={25}
        minRows={25}
        ref={contentRef}
        defaultValue={blogData?.blogDataContextValue.content}
        onKeyDown={handleShortcutKey}
      />

      <Button onClick={saveBlogData} variant='contained' color='error'>
        save
      </Button>
    </Box>
  );
};
