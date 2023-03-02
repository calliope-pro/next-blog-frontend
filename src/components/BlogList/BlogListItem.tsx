import type { Blog, Category } from '#src/types';

import dayjs from 'dayjs';
import markdownToTxt from 'markdown-to-txt';
import NextLink from 'next/link';
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
import { useInView } from 'react-intersection-observer';

export const BlogListItem: React.FC<{
    blog: Blog;
    categoryData?: Category[];
}> = ({ blog, categoryData }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [ref, isDisplayed] = useInView({ triggerOnce: true });

    function getBlogUrl(uuid: string) {
        return path.join('/blogs/', uuid);
    }

    return (
        <>
            <Card
                elevation={isHovering ? 20 : 4}
                ref={ref}
                sx={{
                    py: 6,
                    pl: '3%',
                    borderRadius: 4,
                    backgroundColor: 'rgba(252, 252, 249, 0.85)',
                    opacity: isDisplayed ? 1 : 0,
                    transition: 'opacity 1.2s, box-shadow 0.3s',
                }}
                onClick={() => {
                    setIsHovering(true);
                }}
                onMouseEnter={() => {
                    setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
            >
                <Container>
                    <Box component="h2" mb={3} mt={0}>
                        <MuiLink
                            component={NextLink}
                            href={getBlogUrl(blog.uuid)}
                            underline="hover"
                            color={COLORS.baseColor}
                        >
                            {blog.title}
                        </MuiLink>
                    </Box>

                    <Box component="h3" my={1}>
                        {blog.sub_title}
                    </Box>

                    <Box
                        component="div"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                        }}
                        my={1}
                    >
                        {markdownToTxt(blog.content)}
                    </Box>

                    <Stack my={1} direction="row" spacing={2}>
                        {blog && categoryData ? (
                            blog.categories.map((val) => (
                                <Chip
                                    key={categoryData[val].key}
                                    label={categoryData[val].label}
                                    sx={{
                                        color: COLORS.whiteColor,
                                        backgroundColor: COLORS.accentDarkColor,
                                        fontSize: '85%',
                                    }}
                                />
                            ))
                        ) : (
                            <Skeleton animation="wave" />
                        )}
                    </Stack>

                    <Stack mt={1} direction="row" justifyContent="end">
                        最終更新:&nbsp;
                        {dayjs.unix(blog.updated_at).format('YYYY年MM月DD日')}
                    </Stack>
                </Container>
            </Card>
        </>
    );
};
