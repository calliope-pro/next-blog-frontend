import type { NextPage } from 'next';

import { BlogList, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { useBlogListState } from '#src/utils/hooks';

import { NextSeo } from 'next-seo';

const BlogListPage: NextPage = () => {
    const { data: blogs, error } = useBlogListState();
    if (!blogs && !error) return <Loader />;
    return (
        <>
            <NextSeo title="ブログ一覧" description="CaCaCa Blogのブログ一覧" />
            <ClientLayout>
                <BlogList blogs={blogs ?? []} />
            </ClientLayout>
        </>
    );
};

export default BlogListPage;
