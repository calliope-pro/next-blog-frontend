import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Stack, Typography } from '@mui/material';

import { BlogListItem } from './BlogListItem';
import { useCategoriesState } from '#src/utils/hooks';
import { Blog } from '#src/types';
import { Loader } from '#src/components';

// ブログ一覧
export const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    // 全カテゴリーデータ
    const { data: categoryData } = useCategoriesState();

    // 表示されるブログ数
    const [blogsDisplay, setBlogDisplay] = useState(10);

    // 参照と参照先が画面内に表示されているか
    // 表示されたらブログを追加表示
    const [ref, isDisplayed] = useInView();
    const LOAD_BLOG_COUNT = 10;
    useEffect(() => {
        if (isDisplayed) {
            setBlogDisplay((prev) => prev + LOAD_BLOG_COUNT);
        }
    }, [isDisplayed]);

    return (
        <Container>
            {/* ブログ一覧 */}
            <Stack spacing={10}>
                {blogs.slice(0, blogsDisplay).map((blogData) => (
                    <BlogListItem
                        key={blogData.uuid}
                        blog={blogData}
                        categoryData={categoryData}
                    />
                ))}
            </Stack>

            {/* 無限スクロール */}
            {blogsDisplay >= (blogs.length || 0) ? (
                <Typography textAlign="center" variant="h5" my={5}>
                    No More Contents...
                </Typography>
            ) : (
                <Box ref={ref}>
                    <Loader />
                </Box>
            )}
        </Container>
    );
};
