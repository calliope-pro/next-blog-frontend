import styles from './footer.module.scss';

import dayjs from 'dayjs';
import NextLink from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { COLORS } from '#src/styles';

export const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            textAlign="center"
            bgcolor={COLORS.baseColor}
            color={COLORS.whiteColor}
            pt={4}
            pb={3}
            mt={8}
        >
            <Container>
                <Grid container rowSpacing={2}>
                    <Grid item xs={4} sm={3}>
                        <Typography
                            variant="subtitle1"
                            mb={2}
                            sx={{
                                background:
                                    'linear-gradient(to left, rgb(242, 191, 226), rgb(223, 99, 117))',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            サイトマップ
                        </Typography>
                        <Stack>
                            <MuiLink
                                href="/"
                                component={NextLink}
                                className={styles['blur-link']}
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                Home
                            </MuiLink>
                            <MuiLink
                                href="/portfolio"
                                component={NextLink}
                                className={styles['blur-link']}
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                Portofolio
                            </MuiLink>
                            <MuiLink
                                href="/blogs"
                                component={NextLink}
                                className={styles['blur-link']}
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                Blog
                            </MuiLink>
                            <MuiLink
                                href="/#contact"
                                component={NextLink}
                                className={styles['blur-link']}
                                rel="noopener"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                Contact
                            </MuiLink>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <Typography
                            variant="subtitle1"
                            mb={2}
                            sx={{
                                background:
                                    'linear-gradient(to left, rgb(242, 191, 226), rgb(223, 99, 117))',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            外部リンク
                        </Typography>
                        <Stack>
                            <MuiLink
                                href="https://github.com/calliope-pro"
                                component={NextLink}
                                className={styles['blur-link']}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                GitHub
                            </MuiLink>
                            <MuiLink
                                href="https://atcoder.jp/users/calliope"
                                component={NextLink}
                                className={styles['blur-link']}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                AtCoder
                            </MuiLink>

                            <MuiLink
                                href="https://line.me/R/ti/p/@574rllla"
                                component={NextLink}
                                className={styles['blur-link']}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                LINE bot
                            </MuiLink>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <Typography
                            variant="subtitle1"
                            mb={2}
                            sx={{
                                background:
                                    'linear-gradient(to left, rgb(242, 191, 226), rgb(223, 99, 117))',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            その他
                        </Typography>
                        <Stack>
                            <MuiLink
                                href="/privacy"
                                component={NextLink}
                                className={styles['blur-link']}
                                target="_blank"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                プライバシーポリシー
                            </MuiLink>
                            <MuiLink
                                href="/term"
                                component={NextLink}
                                className={styles['blur-link']}
                                target="_blank"
                                underline="none"
                                sx={{ color: COLORS.whiteColor }}
                            >
                                利用規約・免責事項
                            </MuiLink>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography
                            variant="subtitle1"
                            mb={2}
                            sx={{
                                background:
                                    'linear-gradient(to left, rgb(242, 191, 226), rgb(223, 99, 117))',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            サポート
                        </Typography>
                        <Box
                            mx="auto"
                            component={NextLink}
                            href="https://www.buymeacoffee.com/calliopepro"
                            target="_blank"
                            rel="noopener"
                        >
                            <Image
                                src="/bmc_qr.png"
                                alt="Buy me a coffee"
                                width={160}
                                height={160}
                                style={{
                                    top: 0,
                                    maxWidth: '90%',
                                    objectFit: 'scale-down',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box>&copy;{dayjs().year()} - CaCaCa Blog</Box>
            </Container>
        </Box>
    );
};
