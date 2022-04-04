import type { NextPage } from 'next';

import Head from 'next/head';

import { Footer, Navbar, SelfIntroduction } from '../components';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
      <SelfIntroduction />
      <Footer />
    </>
  );
};

export default HomePage;
