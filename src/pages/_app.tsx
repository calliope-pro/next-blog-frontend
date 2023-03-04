// eslint-disable-next-line no-restricted-imports
import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import nextAbsoluteUrl from 'next-absolute-url';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [ogImageUrl, setOgImageUrl] = useState('');
    useEffect(() => {
        if (router.isReady) {
            setOgImageUrl(new URL('/api/og', nextAbsoluteUrl().origin).href);
        }
    }, [router]);
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <DefaultSeo
                    titleTemplate="%s | CaCaCa Blog"
                    defaultTitle="CaCaCa Blog"
                    description="主にプログラミングに関することを取り上げるブログ兼ポートフォリオ"
                    canonical={`${
                        process.env.NEXT_PUBLIC_FRONTEND_ORIGIN as string
                    }${router.asPath}`}
                    additionalLinkTags={[
                        {
                            rel: 'apple-touch-icon',
                            href: '/favicon.ico',
                            sizes: '76x76',
                        },
                    ]}
                    openGraph={{
                        type: 'website',
                        images: [
                            {
                                width: 1200,
                                height: 630,
                                url: ogImageUrl,
                                alt: 'open graph card',
                            },
                        ],
                        site_name: 'CaCaCa Blog',
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default MyApp;
