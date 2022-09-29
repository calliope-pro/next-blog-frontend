// eslint-disable-next-line no-restricted-imports
import '../../styles/global.scss';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            <RecoilRoot>
                <DefaultSeo
                    titleTemplate="%s | CaCaCa Blog"
                    defaultTitle="CaCaCa Blog"
                    canonical={`https://cacaca-blog.vercel.app${router.asPath}`}
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
                                url: '/favicon.ico',
                                width: 800,
                                height: 600,
                                alt: 'Logo',
                            },
                        ],
                        site_name: 'CaCaCa Blog',
                    }}
                />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default MyApp;
