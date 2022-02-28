import dayjs from 'dayjs';
import Head from 'next/head';
import { Box, Container, Divider, Typography } from '@mui/material';

import { Loader, MarkdownView, ShareButtons } from '#src/components';
import { useBlogListState } from '#src/utils/hooks';
import { BlogIndex } from './BlogIndex';
import { BlogNotFound } from './BlogNotFound';

export const BlogDetail: React.FC<{ uuid: string }> = ({ uuid }) => {
  const { data } = useBlogListState();
  if (!data) {
    return <Loader />;
  }
  const blogData = data.find((blog) => blog.uuid === uuid);
  if (!blogData) {
    return (
      <>
        <Head>
          <title>ブログが存在しません</title>
        </Head>

        <Container>
          <BlogNotFound />
        </Container>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
        <meta name='description' content={blogData.description} />
      </Head>

      <Container>
        <ShareButtons />

        <Box paddingTop={3} textAlign='center'>
          <Typography variant='h2'>{blogData.title}</Typography>
          <Typography variant='h5'>{blogData.sub_title}</Typography>
        </Box>

        <Box textAlign='right'>
          <Typography variant='caption' display='block'>
            作成日時:&nbsp;
            {dayjs.unix(blogData.created_at).format('YYYY年MM月DD日')}
          </Typography>
          <Typography variant='caption' display='block'>
            更新日時:&nbsp;
            {dayjs.unix(blogData.updated_at).format('YYYY年MM月DD日')}
          </Typography>
        </Box>

        <BlogIndex body={blogData.content} />

        <Divider sx={{ borderWidth: 'thin' }} />

        <MarkdownView body={blogData.content} />
      </Container>
    </>
  );
};
