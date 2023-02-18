import Script from 'next/script';
import { Stack } from '@mui/material';

import { Footer, Navbar } from '#src/components';
import { COLORS } from '#src/styles';

type ClientLayoutPropType = {
    isAdsExist?: boolean;
};

export const ClientLayout: React.FC<ClientLayoutPropType> = ({
    children,
}) => {
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5059912395081075"
                crossOrigin="anonymous"
                strategy="beforeInteractive"
            />

            <Stack minHeight="100vh" sx={{ bgcolor: COLORS.mainColor }} justifyContent="space-between">
                <Navbar />
                {children}
                <Footer />
            </Stack>
        </>
    );
};
