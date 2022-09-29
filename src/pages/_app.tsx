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
                    openGraph={{
                        type: 'website',
                        images: [{ url: '/favicon.ico', alt: 'favicon' }],
                    }}
                />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default MyApp;
