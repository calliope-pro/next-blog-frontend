import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { MarkdownView, ShareButtons } from '#src/components';
import { BlogIndex } from './BlogIndex';
import { Blog } from '#src/types';

export const BlogDetail: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <>
            <Container>
                <ShareButtons />

                <Box paddingTop={3} textAlign="center">
                    <Typography variant="h4">{blog.title}</Typography>
                    <Typography variant="subtitle1">{blog.sub_title}</Typography>
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
