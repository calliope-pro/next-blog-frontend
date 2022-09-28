import type { NextPage } from 'next';

import Head from 'next/head';

import { BlogList, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { useBlogListState } from '#src/utils/hooks';
import { Suspense } from 'react';

const BlogListPage: NextPage = () => {
    const { data: blogs } = useBlogListState();
    return (
        <>
            <Head>
                <title>ブログ一覧</title>
                <meta name="description" content="List of all blogs" />
            </Head>

            <ClientLayout isAdsExist>
                <Suspense fallback={<Loader />}>
                    <BlogList blogs={blogs ?? []} />
                </Suspense>
            </ClientLayout>
        </>
    );
};

export default BlogListPage;
