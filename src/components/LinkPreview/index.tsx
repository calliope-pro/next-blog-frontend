import nextAbsoluteUrl from 'next-absolute-url';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState, useEffect } from 'react';
import {
    Box,
    CircularProgress,
    Link as MuiLink,
    styled,
    Tooltip,
    TooltipProps,
} from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';

import { useFetchLinkPreviewHook } from '#src/utils/hooks';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export const LinkPreview: React.FC<{
    children: ReactNode;
    href: string;
}> = ({ children, href }) => {
    const isExternalUrl = href?.startsWith('http');
    const router = useRouter();
    const [origin, setOrigin] = useState<string>('');
    useEffect(() => {
        if (router.isReady) {
            setOrigin(nextAbsoluteUrl().origin);
        }
    }, [router]);
    console.log(origin);
    // const { data, error } = useFetchLinkPreviewHook(href);
    const { data, error } = useFetchLinkPreviewHook(
        isExternalUrl ? href : new URL(href, origin).href,
    );

    return (
        <Link passHref href={href}>
            <HtmlTooltip
                title={
                    <Link passHref href={href}>
                        <MuiLink
                            target={isExternalUrl ? '_blank' : undefined}
                            rel={isExternalUrl ? 'noopener' : undefined}
                        >
                            <Box sx={{ borderRadius: '5px' }}>
                                {data && !error ? (
                                    <Image
                                        src={`data:image/jpeg;base64, ${data}`}
                                        alt={children as string}
                                        width={1440}
                                        height={1060}
                                    />
                                ) : (
                                    <CircularProgress
                                        size={72}
                                        sx={{ animationDuration: '2s' }}
                                    />
                                )}
                            </Box>
                        </MuiLink>
                    </Link>
                }
            >
                <MuiLink
                    target={isExternalUrl ? '_blank' : undefined}
                    rel={isExternalUrl ? 'noopener' : undefined}
                >
                    {children}
                </MuiLink>
            </HtmlTooltip>
        </Link>
    );
};
