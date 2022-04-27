import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
}
