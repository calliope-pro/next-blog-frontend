import { ClientLayout } from '#src/layouts/client';
import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import { Home } from '#src/components/Home';

const HomePage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="ホーム"
                openGraph={{
                    images: [
                        {
                            url: new URL(
                                '/api/og?title=ホーム',
                                process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            ).href,
                        },
                    ],
                }}
            />
            <ClientLayout>
                <Home />
            </ClientLayout>
        </>
    );
};

export default HomePage;
