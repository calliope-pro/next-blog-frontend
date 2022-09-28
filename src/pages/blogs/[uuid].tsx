import type { Blog } from '#src/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { BlogDetail, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { fetchBlog } from '#src/utils/api/blog';
import { useRouter } from 'next/router';

const BlogDetailPage: NextPage<{ blog: Blog }> = ({ blog }) => {
    const router = useRouter();
    return (
        <ClientLayout isAdsExist>
            {router.isFallback ? <Loader /> : <BlogDetail blog={blog} />}
        </ClientLayout>
    );
};

export default BlogDetailPage;

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const blog = await fetchBlog(context.params?.uuid as string);
        return {
            props: { blog },
            revalidate: 60,
        };
    } catch (error) {
        return { notFound: true };
    }
};
