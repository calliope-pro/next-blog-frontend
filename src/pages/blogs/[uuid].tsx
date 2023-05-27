import type { Blog } from '#src/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { BlogDetail, Loader } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { fetchBlogByUuid } from '#src/utils/api/blog';

import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

const BlogDetailPage: NextPage<{ blog: Blog }> = ({ blog }) => {
    const router = useRouter();
    return (
        <ClientLayout>
            {router.isFallback ? (
                <Loader />
            ) : (
                <>
                    <ArticleJsonLd
                        url={`${
                            process.env.NEXT_PUBLIC_FRONTEND_ORIGIN as string
                        }${router.asPath}`}
                        title={blog.title}
                        images={[
                            new URL(
                                `/api/og?title=${blog.title}&description=${blog.sub_title}`,
                                process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            ).href,
                        ]}
                        description={blog.sub_title}
                        datePublished={dayjs
                            .unix(blog.created_at)
                            .toISOString()}
                        dateModified={dayjs.unix(blog.updated_at).toISOString()}
                        authorName="CaCaCa Blog"
                        isAccessibleForFree
                        publisherLogo="/favicon.png"
                    />
                    <BreadcrumbJsonLd
                        itemListElements={[
                            {
                                position: 1,
                                name: 'ホーム',
                                item: process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            },
                            {
                                position: 2,
                                name: 'ブログ一覧',
                                item: `${
                                    process.env
                                        .NEXT_PUBLIC_FRONTEND_ORIGIN as string
                                }/blogs`,
                            },
                            {
                                position: 3,
                                name: blog.title,
                                item: `${
                                    process.env
                                        .NEXT_PUBLIC_FRONTEND_ORIGIN as string
                                }${router.asPath}`,
                            },
                        ]}
                    />
                    <NextSeo
                        title={blog.title}
                        description={blog.sub_title}
                        openGraph={{
                            images: [
                                {
                                    url: new URL(
                                        `/api/og?title=${blog.title}&description=${blog.sub_title}`,
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
