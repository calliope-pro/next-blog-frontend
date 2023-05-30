import Script from 'next/script';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Footer, Navbar } from '#src/components';
import Head from 'next/head';
import { styled } from '@mui/material/styles';

const FancyBorderRadius = styled(Box)({
    position: 'absolute',
    width: 300,
    height: 300,
    zIndex: -1000,
    top: '5vh',
    left: '5vw',
    boxShadow: '2px 2px 20px rgba(0,0,0,0.2)',
    animation: 'fancyBorderRadius 12s ease infinite',
    '@keyframes fancyBorderRadius': {
        '0%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        },
        '25%': {
            borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%',
        },
        '50%': {
            borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%',
        },
        '75%': {
            borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%',
        },
        '100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        },
    },
});

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const key = router.isReady ? router.asPath : '';
    return (
        <>
            <Head>
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-Y838E4H5WF"
                />
                <script
                    id="Google-tag-gtag-js"
                    dangerouslySetInnerHTML={{
                        __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Y838E4H5WF');",
                    }}
                />
            </Head>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5059912395081075"
                crossOrigin="anonymous"
                strategy="beforeInteractive"
                key={key}
            />

            <FancyBorderRadius />
            <Stack
                minHeight="100svh"
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
