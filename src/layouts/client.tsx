import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import { Footer, Navbar } from '#src/components';
import { COLORS } from '#src/styles';

export const ClientLayout: React.FC = ({ children }) => {
    const router = useRouter();
    const [key, setKey] = useState('');

    useEffect(() => {
        if (router.isReady) {
            setKey(router.asPath);
        }
    }, [router.isReady, router.asPath]);
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5059912395081075"
                crossOrigin="anonymous"
                strategy="beforeInteractive"
                key={key}
            />

            <Stack
                minHeight="100vh"
                sx={{ bgcolor: COLORS.mainColor }}
                justifyContent="space-between"
            >
                <Navbar />
                {children}
                <Footer />
            </Stack>
        </>
    );
};
