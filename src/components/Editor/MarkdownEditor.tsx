import style from './md-editor.module.scss';

import { useState, useContext, useRef, ClipboardEvent } from 'react';
import { Alert, Box, Button, Snackbar, TextareaAutosize } from '@mui/material';

import { blogDataContext } from './contexts';
import { adminPostBlog, adminPostImageBase64URL } from '#src/utils/backendApi';

export const MarkdownEditor: React.FC = () => {
  // saveされたか
  const [isSaved, setIsSaved] = useState(false);

  // markdown textareaの参照
  const contentRef = useRef<HTMLTextAreaElement>(null!);

  const blogData = useContext(blogDataContext);

  // バックエンドへ保存
  const saveBlogData = async () => {
    if (blogData) {
      blogData.setBlogDataContextValue((prev) => {
        prev.content = contentRef.current.value;
        return prev;
      });
      await adminPostBlog(blogData.blogDataContextValue);
      setIsSaved(() => true);
    }
  };

  const uploadImageBase64URL = (e: ClipboardEvent<HTMLTextAreaElement>) => {
    const file = e.clipboardData.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const res = await adminPostImageBase64URL({
          url: reader.result as string,
        });
        const cursorPosition = contentRef.current.selectionStart;
        const body = contentRef.current.value;
        contentRef.current.value =
          body.substring(0, cursorPosition) +
          `![画像](${
            process.env.NEXT_PUBLIC_BACKEND_ORIGIN as string
          }/api/images/${res.data.name})` +
          body.substring(cursorPosition);
      };
    }
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
          variant="filled"
          onClose={() => setIsSaved(() => false)}
          severity="success"
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
        onPaste={uploadImageBase64URL}
      />

      <Button onClick={saveBlogData} variant="contained" color="error">
        save
      </Button>
    </Box>
  );
};
