import { ClientLayout } from '#src/layouts/client';
import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import { SelfIntroduction } from '#src/components';

const HomePage: NextPage = () => {
    return (
        <>
            <NextSeo
                title="ホーム"
                description="Home page of this site. Describes this site and introduces the administrator."
            />
            <ClientLayout>
                <SelfIntroduction />
            </ClientLayout>
        </>
    );
};

export default HomePage;
