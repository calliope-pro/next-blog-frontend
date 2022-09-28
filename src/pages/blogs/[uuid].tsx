import type { Blog } from '#src/types';
import type { GetServerSideProps, NextPage } from 'next';

import { BlogDetail } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { fetchBlog } from '#src/utils/api/blog';

const BlogDetailPage: NextPage<{ blog: Blog }> = ({ blog }) => {
    return (
        <ClientLayout isAdsExist>
            <BlogDetail blog={blog} />
        </ClientLayout>
    );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const blog = await fetchBlog(context.query.uuid as string);
        return {
            props: { blog },
        };
    } catch (error) {
        return { notFound: true };
    }
};
