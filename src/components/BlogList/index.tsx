import lodash from 'lodash';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Stack, Typography } from '@mui/material';

import { BlogListItem } from './BlogListItem';
import { useBlogListState, useCategoriesState } from '#src/utils/hooks';

// ブログ一覧
export const BlogList: React.FC = () => {
  // 全blogデータ
  const { data, error } = useBlogListState();

  // 全カテゴリーデータ
  const { data: categoryData } = useCategoriesState();

  // 表示されるブログ数
  const [blogsDisplay, setBlogDisplay] = useState(10);

  // 参照と参照先が画面内に表示されているか
  // 表示されたらブログを追加表示
  const [ref, isDisplayed] = useInView();
  useEffect(() => {
    if (isDisplayed) {
      setBlogDisplay((prev) => prev + 10);
    }
  }, [isDisplayed]);

  return (
    <Container sx={{ flex: 1 }}>
      {/* ブログ一覧 */}
      <Stack gap={5}>
        {data ? (
          data
            .slice(0, blogsDisplay)
            .map((blogData) => (
              <BlogListItem
                blogData={blogData}
                categoryData={categoryData}
                key={blogData.uuid}
              />
            ))
        ) : (
          <>
            {lodash.range(blogsDisplay).map((val) => (
              <BlogListItem key={val} />
            ))}
          </>
        )}
      </Stack>

      {/* 無限スクロール */}
      {blogsDisplay >= (data?.length || 0) ? (
        <Typography textAlign="center" variant="h4" pt={5}>
          No More Contents...
        </Typography>
      ) : (
        <Box ref={ref}>
          <BlogListItem />
        </Box>
      )}
    </Container>
  );
};
