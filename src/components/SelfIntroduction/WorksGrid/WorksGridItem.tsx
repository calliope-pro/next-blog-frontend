import NextLink from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type WorksGridItemProps = {
    image: string;
    title: string;
    href: string;
    description: string;
};

export const WorksGridItem: React.FC<WorksGridItemProps> = ({
    image,
    title,
    href,
    description,
}) => {
    return (
        <Grid item xs={12} sm={6} md={4} display="flex">
            <Card
                sx={{
                    ':hover': {
                        transform: 'scale(1.03)',
                        transition: 'transform .4s',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        pt: 1,
                        objectFit: 'scale-down',
                        height: 140,
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        textAlign="center"
                        variant="h5"
                        component={NextLink}
                        href={href}
                        display="block"
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
