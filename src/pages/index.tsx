import { ClientLayout } from '#src/layouts/client';
import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import { SelfIntroduction } from '#src/components';

const HomePage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="ホーム"
                description="CaCaCa Blogのホームページになります。サイトや管理人の自己紹介、問い合わせフォームがあります。"
            />
            <ClientLayout>
                <SelfIntroduction />
            </ClientLayout>
        </>
    );
};

export default HomePage;
