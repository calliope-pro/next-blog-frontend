import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ContactForm } from './ContactForm';

export const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" textAlign="center" letterSpacing={2}>
                About
            </Typography>
            <Box component="p">
                CaCaCa Blogをご覧いただきありがとうございます。
            </Box>
            <Box component="p">
                当サイトは
                <NextLink href="/portfolio">ポートフォリオ</NextLink>兼
                <NextLink href="/blogs">ブログ</NextLink>
                サイトとなっております。
            </Box>

            <Box component="p">
                記事のお問い合わせや、お仕事等に関しましてはお手数をお掛けしますが以下の
                <NextLink href="#contact">フォーム</NextLink>
                にてお気軽にご連絡ください。
            </Box>

            <Typography
                id="contact"
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
                sx={{ scrollMarginTop: { xs: '135px', sm: '95px' } }}
            >
                Contact
            </Typography>
            <ContactForm />
        </Container>
    );
};
