import { useEffect, useId, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BlogListItem } from './BlogListItem';
import { useCategoriesState } from '#src/utils/hooks';
import { Blog } from '#src/types';
import { Loader } from '#src/components';

// ブログ一覧
export const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    const categoryFormId = useId();
    // 全カテゴリーデータ
    const { data: categoryData } = useCategoriesState();
    const [filterCategory, setFilterCategory] = useState(-1);

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
    const filteredBlogs = useMemo(() => {
        if (filterCategory >= 0) {
            return blogs.filter(({ categories }) =>
                categories.includes(filterCategory),
            );
        }
        return blogs;
    }, [blogs, filterCategory]);

    return (
        <Container>
            <Box textAlign="center" mb={4}>
                <FormControl>
                    <InputLabel id={categoryFormId}>カテゴリー</InputLabel>
                    <Select
                        sx={{ margin: 0 }}
                        labelId={categoryFormId}
                        value={filterCategory}
                        onChange={({ target }) =>
                            setFilterCategory(target.value as number)
                        }
                    >
                        <MenuItem value={-1}>すべて</MenuItem>
                        {(categoryData || []).map(({ key, label }) => (
                            <MenuItem key={key} value={key}>
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* ブログ一覧 */}
            <Stack spacing={10}>
                {filteredBlogs.slice(0, blogsDisplay).map((blogData) => (
                    <BlogListItem
                        key={blogData.uuid}
                        blog={blogData}
                        categoryData={categoryData}
                    />
                ))}
            </Stack>

            {/* 無限スクロール */}
            {blogsDisplay >= (filteredBlogs.length || 0) ? (
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
