import Link from 'next/link';
import { ReactNode, useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CircularProgress,
    Typography,
} from '@mui/material';

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
            : new URL('/favicon', process.env.NEXT_PUBLIC_FRONTEND_ORIGIN).href,
    );

    return (
        <Link passHref href={href}>
            {data && !error ? (
                <Card
                    component="a"
                    target={isExternalUrl ? '_blank' : undefined}
                    rel={isExternalUrl ? 'noopener' : undefined}
                    elevation={isHovering ? 10 : 2}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    sx={{ display: 'inline-block', textDecoration: 'none' }}
                >
                    <CardActionArea
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            px: 4,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={data.image?.url}
                            alt={children?.toString()}
                            sx={{
                                objectFit: 'contain',
                                height: 40,
                                width: 'auto',
                            }}
                        />
                        <CardContent>
                            <Typography variant="h5">{data.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : (
                <CircularProgress size={40} />
            )}
        </Link>
    );
};
