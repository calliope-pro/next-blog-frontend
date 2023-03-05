import type { Blog } from '#src/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { BlogDetail, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { fetchBlogByUuid } from '#src/utils/api/blog';

import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const BlogDetailPage: NextPage<{ blog: Blog }> = ({ blog }) => {
    const router = useRouter();
    return (
        <ClientLayout>
            {router.isFallback ? (
                <Loader />
            ) : (
                <>
                    <NextSeo
                        title={blog.title}
                        description={blog.sub_title}
                        openGraph={{
                            images: [
                                {
                                    url: new URL(
                                        `/api/og?title=${blog.title}?description=${blog.sub_title}`,
                                        process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                                    ).href,
                                },
                            ],
                        }}
                    />
                    <BlogDetail blog={blog} />
                </>
            )}
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
        const blog = await fetchBlogByUuid(context.params?.uuid as string);
        return {
            props: { blog },
            revalidate: 60,
        };
    } catch (error) {
        return { notFound: true };
    }
};
