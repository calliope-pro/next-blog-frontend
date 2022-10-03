import Script from 'next/script';
import { Stack } from '@mui/material';

import { Footer, Navbar } from '#src/components';
import { COLORS } from '#src/styles';

type ClientLayoutPropType = {
    isAdsExist?: boolean;
};

export const ClientLayout: React.FC<ClientLayoutPropType> = ({
    children,
    isAdsExist,
}) => {
    const AdmaxAd = (
        <>
            <div
                className="admax-ads"
                data-admax-id="f11b860d747ce3037ea1083fec43a96b"
                style={{
                    display: 'inline-block',
                    width: '728px',
                    height: '90px',
                    margin: '0 auto',
                }}
            />
            <Script
                id="admax-ads"
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: '(admaxads = window.admaxads || []).push({admax_id: "f11b860d747ce3037ea1083fec43a96b",type: "banner"});',
                }}
            />
            <Script
                type="text/javascript"
                src="https://adm.shinobi.jp/st/t.js"
                async
            />
        </>
    );
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-Y838E4H5WF"
            />
            <Script
                id="Google-tag-gtag-js"
                dangerouslySetInnerHTML={{
                    __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Y838E4H5WF');",
                }}
            />

            <Stack minHeight="100vh" sx={{ bgcolor: COLORS.mainColor }}>
                <Navbar />
                {children}
                {isAdsExist && AdmaxAd}
                <Footer />
            </Stack>
        </>
    );
};
