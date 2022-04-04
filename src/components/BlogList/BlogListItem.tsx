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
  blogData?: Blog;
  categoryData?: Category[];
}> = ({ blogData, categoryData }) => {
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
        <Box component="h1" paddingTop="15px" margin={0}>
          {blogData ? (
            <Link href={getBlogUrl(blogData.uuid)} passHref>
              <MuiLink underline="hover" color={COLORS.baseColor}>
                {blogData.title}
              </MuiLink>
            </Link>
          ) : (
            <Skeleton animation="wave" />
          )}
        </Box>

        <Box component="h3" margin="8px">
          {blogData?.sub_title || <Skeleton animation="wave" />}
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
          {blogData ? (
            markdownToTxt(blogData.content)
          ) : (
            <Skeleton animation="wave" />
          )}
        </Box>

        <Stack direction="row">
          {blogData && categoryData ? (
            blogData.categories.map((val) => (
              <Chip
                key={categoryData[val].key}
                label={categoryData[val].label}
                sx={{
                  color: COLORS.whiteColor,
                  backgroundColor: COLORS.accentDarkColor,
                }}
              />
            ))
          ) : (
            <Skeleton animation="wave" />
          )}
        </Stack>

        <Stack direction="row" justifyContent="end">
          最終更新:&nbsp;
          {blogData ? (
            dayjs.unix(blogData.updated_at).format('YYYY年MM月DD日')
          ) : (
            <Skeleton width="130px" animation="wave" />
          )}
        </Stack>
      </Container>
    </Card>
  );
};
