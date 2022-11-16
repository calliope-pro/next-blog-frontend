import styles from './footer.module.scss';
import dayjs from 'dayjs';
import {
    Box,
    Container,
    Grid,
    Stack,
    Link as MuiLink,
    Typography,
} from '@mui/material';

import { COLORS } from '#src/styles';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
    return (
        <Box
            textAlign="center"
            bgcolor={COLORS.baseColor}
            color={COLORS.whiteColor}
            mt={5}
            py={3}
        >
            <Container>
                <Grid container>
                    <Grid item xs={8} md={9}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" mb={2}>
                                    サイトマップ
                                </Typography>
                                <Stack spacing={1}>
                                    <Link href="/" passHref>
                                        <MuiLink
                                            className={styles['blur-link']}
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            Home
                                        </MuiLink>
                                    </Link>
                                    <Link href="/blogs" passHref>
                                        <MuiLink
                                            className={styles['blur-link']}
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            Blog
                                        </MuiLink>
                                    </Link>
                                    <Link href="/works" passHref>
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            rel="noopener"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            Work
                                        </MuiLink>
                                    </Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" mb={2}>
                                    外部リンク
                                </Typography>
                                <Stack spacing={1}>
                                    <Link
                                        href="https://github.com/calliope-pro"
                                        passHref
                                    >
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            rel="noopener"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            GitHub
                                        </MuiLink>
                                    </Link>
                                    <Link
                                        href="https://atcoder.jp/users/calliope"
                                        passHref
                                    >
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            rel="noopener"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            AtCoder
                                        </MuiLink>
                                    </Link>
                                    <Link
                                        href="https://line.me/R/ti/p/@574rllla"
                                        passHref
                                    >
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            rel="noopener"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            公式LINE
                                        </MuiLink>
                                    </Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" mb={2}>
                                    その他
                                </Typography>
                                <Stack spacing={1}>
                                    <Link href="/privacy" passHref>
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            プライバシーポリシー
                                        </MuiLink>
                                    </Link>
                                    <Link
                                        href="/term"
                                        passHref
                                    >
                                        <MuiLink
                                            className={styles['blur-link']}
                                            target="_blank"
                                            underline="none"
                                            sx={{ color: COLORS.whiteColor }}
                                        >
                                            利用規約・免責事項
                                        </MuiLink>
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Stack spacing={1}>
                            <Box>&copy;{dayjs().year()} - CaCaCa Blog</Box>
                            <Image
                                src="/bmc_qr.png"
                                width="100%"
                                height="100%"
                                objectFit="scale-down"
                                alt="Buy me a coffee"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
