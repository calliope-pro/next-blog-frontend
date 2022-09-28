import dayjs from 'dayjs';
import Head from 'next/head';
import { Box, Container, Divider, Typography } from '@mui/material';

import { MarkdownView, ShareButtons } from '#src/components';
import { BlogIndex } from './BlogIndex';
import { Blog } from '#src/types';

export const BlogDetail: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="description" content={blog.description} />
            </Head>

            <Container>
                <ShareButtons />

                <Box paddingTop={3} textAlign="center">
                    <Typography variant="h2">{blog.title}</Typography>
                    <Typography variant="h5">{blog.sub_title}</Typography>
                </Box>

                <Box textAlign="right">
                    <Typography variant="caption" display="block">
                        作成日時:&nbsp;
                        {dayjs.unix(blog.created_at).format('YYYY年MM月DD日')}
                    </Typography>
                    <Typography variant="caption" display="block">
                        更新日時:&nbsp;
                        {dayjs.unix(blog.updated_at).format('YYYY年MM月DD日')}
                    </Typography>
                </Box>

                <BlogIndex body={blog.content} />

                <Divider sx={{ borderWidth: 'thin' }} />

                <MarkdownView body={blog.content} />
            </Container>
        </>
    );
};
