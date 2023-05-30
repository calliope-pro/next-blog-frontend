import NextLink from 'next/link';
import { ReactNode, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useFetchLinkPreviewHook } from '#src/utils/hooks';

export const LinkCard: React.FC<{
    children: ReactNode;
    href: string;
}> = ({ children, href }) => {
    const [isHovering, setIsHovering] = useState(false);
    const isExternalUrl = href?.startsWith('http');
    const { data, error } = useFetchLinkPreviewHook(
        isExternalUrl
            ? href
            : new URL(href, process.env.NEXT_PUBLIC_FRONTEND_ORIGIN).href,
    );

    return (
        <>
            {data && !error ? (
                <Card
                    elevation={isHovering ? 10 : 1}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    sx={{
                        my: 1,
                        mx: 'auto',
                        borderRadius: 4,
                    }}
                >
                    <CardActionArea
                        component={NextLink}
                        href={href}
                        target={isExternalUrl ? '_blank' : undefined}
                        rel={isExternalUrl ? 'noopener' : undefined}
                        sx={{
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 1, sm: 4 },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={data.logo?.url}
                            alt={children?.toString()}
                            height={60}
                            sx={{
                                width: 'fit-content',
                                minHeight: 60,
                                objectFit: 'contain',
                                flexBasis: 'fit-content',
                            }}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography
                                variant="h5"
                                whiteSpace="pre-wrap"
                                overflow="hidden"
                                display="-webkit-box"
                                sx={{
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                whiteSpace="pre-wrap"
                                overflow="hidden"
                                display="-webkit-box"
                                sx={{
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : (
                <CircularProgress size={40} />
            )}
        </>
    );
};
