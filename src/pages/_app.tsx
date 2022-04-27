import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import Script from 'next/script';
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
      <Script src="https://adm.shinobi.jp/s/6795d28641044c55c462bac5e347344c"></Script>
    </>
  );
}

export default MyApp;
