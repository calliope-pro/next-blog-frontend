import { ClientLayout } from '#src/layouts/client';
import type { NextPage } from 'next';

import Head from 'next/head';

import { SelfIntroduction } from '#src/components';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <ClientLayout>
        <SelfIntroduction />
      </ClientLayout>
    </>
  );
};

export default HomePage;
