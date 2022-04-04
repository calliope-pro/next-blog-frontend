import type { Blog, Category } from '#src/types';

import nextAbsoluteUrl from 'next-absolute-url';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { fetchBlogList, fetchCategories } from '#src/utils/backendApi';

export const useBlogListState = (onlyPublished = true) => {
  return useSWR<Blog[], Error>('blogList', () => fetchBlogList(onlyPublished));
};

export const useCategoriesState = () => {
  return useSWR<Category[], Error>('categories', () => fetchCategories());
};

export const useCurrentAbsUrl = () => {
  const router = useRouter();
  const { origin } = nextAbsoluteUrl();
  const [currentUrl, setCurrentUrl] = useState<string>('');
  useEffect(() => {
    setCurrentUrl(new URL(router.asPath, origin).href);
  }, [router, origin]);
  return currentUrl;
};
