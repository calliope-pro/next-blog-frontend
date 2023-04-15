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
                    component={NextLink}
                    href={href}
                    target={isExternalUrl ? '_blank' : undefined}
                    rel={isExternalUrl ? 'noopener' : undefined}
                    elevation={isHovering ? 10 : 1}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    sx={{
                        my: 1,
                        mx: 'auto',
                        borderRadius: 4,
                        width: 'fit-content',
                        maxWidth: { xs: '80%', sm: '60%' },
                        display: 'block',
                        textDecoration: 'none',
                    }}
                >
                    <CardActionArea
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
                                objectFit: 'contain',
                            }}
                        />
                        <CardContent sx={{ p: 0 }}>
                            <Typography variant="h5" my={1}>
                                {data.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                my={1}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
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
