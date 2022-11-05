import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { GetServerSideProps } from 'next';

import { fetchBlogList } from '#src/utils/api/blog';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const blogs = await fetchBlogList(true);

    const fields: ISitemapField[] = blogs.map(({ uuid }) => ({
        loc: new URL(
            `/blogs/${uuid}`,
            `https://${ctx.req.headers.host as string}`,
        ).href,
        lastmod: new Date().toISOString(),
        priority: 0.9,
    }));

    return getServerSideSitemap(ctx, fields);
};

const Sitemap = () => {
    null;
};
export default Sitemap;
