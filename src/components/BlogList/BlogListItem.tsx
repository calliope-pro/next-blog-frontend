import type { Blog, Category } from '#src/types';

import dayjs from 'dayjs';
import markdownToTxt from 'markdown-to-txt';
import Link from 'next/link';
import path from 'path';
import { useState } from 'react';
import {
    Box,
    Card,
    Chip,
    Container,
    Link as MuiLink,
    Skeleton,
    Stack,
} from '@mui/material';

import { COLORS } from '#src/styles';

export const BlogListItem: React.FC<{
    blog: Blog;
    categoryData?: Category[];
}> = ({ blog, categoryData }) => {
    const [isHovering, setIsHovering] = useState(false);

    function getBlogUrl(uuid: string) {
        return path.join('/blogs/', uuid);
    }

    return (
        <Card
            elevation={isHovering ? 10 : 2}
            sx={{ backgroundColor: COLORS.whiteColor, p: 1 }}
            onClick={() => {
                setIsHovering(true);
            }}
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Container>
                <Box component="h2" paddingTop="15px" margin={0}>
                    <Link href={getBlogUrl(blog.uuid)} passHref>
                        <MuiLink underline="hover" color={COLORS.baseColor}>
                            {blog.title}
                        </MuiLink>
                    </Link>
                </Box>

                <Box component="h3" margin="8px">
                    {blog.sub_title}
                </Box>

                <Box
                    component="div"
                    margin="8px"
                    sx={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    {markdownToTxt(blog.content)}
                </Box>

                <Stack direction="row">
                    {blog && categoryData ? (
                        blog.categories.map((val) => (
                            <Chip
                                key={categoryData[val].key}
                                label={categoryData[val].label}
                                sx={{
                                    color: COLORS.whiteColor,
                                    backgroundColor: COLORS.accentDarkColor,
                                    mr: 1,
                                }}
                            />
                        ))
                    ) : (
                        <Skeleton animation="wave" />
                    )}
                </Stack>

                <Stack direction="row" justifyContent="end">
                    最終更新:&nbsp;
                    {dayjs.unix(blog.updated_at).format('YYYY年MM月DD日')}
                </Stack>
            </Container>
        </Card>
    );
};
