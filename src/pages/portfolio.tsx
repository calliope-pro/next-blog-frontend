import { SelfIntroduction } from '#src/components';
import { ClientLayout } from '#src/layouts/client';
import { NextSeo } from 'next-seo';

const PortfolioPage = () => {
    return (
        <>
            <NextSeo
                title="ポートフォリオ"
                openGraph={{
                    images: [
                        {
                            url: new URL(
                                '/api/og?title=ポートフォリオ',
                                process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            ).href,
                        },
                    ],
                }}
            />
            <ClientLayout>
                <SelfIntroduction />
            </ClientLayout>
        </>
    );
};

export default PortfolioPage;
