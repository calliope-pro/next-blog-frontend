import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
      <script src="https://adm.shinobi.jp/s/2e5a457f2e9413895ab163e786502b5f"></script>
    </>
  );
}

export default MyApp;
