import type { Blog, Category } from '#src/types';

import nextAbsoluteUrl from 'next-absolute-url';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { fetchBlogList, fetchCategories } from '#src/utils/api/blog';
import axios from 'axios';
import { MqlResponseData } from '@microlink/mql';
import { adminVerifyTokens } from './api/auth';

export const useVerifyAuthStateHook = () => {
    return useSWR<boolean, Error>(
        'authState',
        async () => (await adminVerifyTokens()).data,
    );
};

export const useBlogListState = (onlyPublished = true) => {
    return useSWR<Blog[], Error>(
        'blogList',
        () => fetchBlogList(onlyPublished),
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
    return useSWR<MqlResponseData, Error>(url, async (url: string) => {
        return (await axios.get('/api/preview', { params: { url } }))
            .data as MqlResponseData;
    });
};
