import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { Footer, Navbar } from '#src/components';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
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
                sx={{
                    background:
                        'linear-gradient(-90deg, rgba(242, 191, 226, 0.4), rgba(193, 202, 243, 0.4))',
                }}
                justifyContent="space-between"
            >
                <Navbar />
                {children}
                <Footer />
            </Stack>
        </>
    );
};
