import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            '(admaxads = window.admaxads || []).push({admax_id: "6795d28641044c55c462bac5e347344c", type: "action"});',
        }}
      />
      <script
        type="text/javascript"
        charSet="utf-8"
        src="https://adm.shinobi.jp/st/t.js"
        async
      />
    </RecoilRoot>
  );
}

export default MyApp;
