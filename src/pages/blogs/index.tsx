import type { NextPage } from 'next';

import Head from 'next/head';

import { BlogList } from '#src/components';
import { ClientLayout } from '#src/layouts/client';

const BlogListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ブログ一覧</title>
        <meta name="description" content="The list of all blogs" />
      </Head>

      <ClientLayout>
        <BlogList />
      </ClientLayout>
    </>
  );
};

export default BlogListPage;
