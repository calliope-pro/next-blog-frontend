import type { GetServerSideProps, NextPage } from 'next';

import Head from 'next/head';

import { BlogList } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { fetchBlogList } from '#src/utils/api/blog';
import { Blog } from '#src/types';

const BlogListPage: NextPage<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <>
            <Head>
                <title>ブログ一覧</title>
                <meta name="description" content="List of all blogs" />
            </Head>

            <ClientLayout isAdsExist>
                <BlogList blogs={blogs} />
            </ClientLayout>
        </>
    );
};

export default BlogListPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const blogs = await fetchBlogList();
    return {
        props: { blogs },
    };
};
