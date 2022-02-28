import type { NextPage } from 'next';

import Head from 'next/head';

import { BlogList, Navbar } from '../../components';

const BlogListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ブログ一覧</title>
        <meta name='description' content='The list of all blogs' />
      </Head>

      <Navbar />
      <BlogList />
    </>
  );
};

export default BlogListPage;
