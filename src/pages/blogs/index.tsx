import type { NextPage } from 'next';

import { BlogList, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { useBlogListState } from '#src/utils/hooks';

import { Suspense } from 'react';
import { NextSeo } from 'next-seo';

const BlogListPage: NextPage = () => {
    const { data: blogs } = useBlogListState();
    return (
        <>
            <NextSeo title="ブログ一覧" description="CaCaCa Blogのブログ一覧" />
            <ClientLayout isAdsExist>
                <Suspense fallback={<Loader />}>
                    <BlogList blogs={blogs ?? []} />
                </Suspense>
            </ClientLayout>
        </>
    );
};

export default BlogListPage;
