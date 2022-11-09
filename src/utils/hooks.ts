import type { Blog, Category } from '#src/types';

import nextAbsoluteUrl from 'next-absolute-url';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { fetchBlogList, fetchCategories } from '#src/utils/api/blog';
import axios from 'axios';

export const useBlogListState = (onlyPublished = true) => {
    return useSWR<Blog[], Error>(
        'blogList',
        () => fetchBlogList(onlyPublished),
        { suspense: true },
    );
};

export const useCategoriesState = () => {
    return useSWR<Category[], Error>('categories', () => fetchCategories());
};

export const useCurrentAbsUrl = () => {
    const router = useRouter();
    const [currentUrl, setCurrentUrl] = useState<string>('');
    useEffect(() => {
        const { origin } = nextAbsoluteUrl();
        setCurrentUrl(new URL(router.asPath, origin).href);
    }, [router]);
    return currentUrl;
};

export const useFetchLinkPreviewHook = (url: string) => {
    return useSWR<string, Error>(url, async (url: string) => {
        const { image } = (await axios.get('/api/preview', { params: { url } }))
            .data as {
            image: string;
        };
        return image;
    });
};
