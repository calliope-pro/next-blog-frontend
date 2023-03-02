import type { navItem } from '#src/types';

import NextLink from 'next/link';
import { AppBar, Box, Container, Link as MuiLink, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { NavItem } from './NavItem';
import { COLORS } from '#src/styles';

// 画面上部のナビゲーションバー
export const Navbar: React.FC = () => {
    const navItems: navItem[] = [
        { label: 'Home', url: '/' },
        { label: 'Blog', url: '/blogs' },
    ];
    const theme = useTheme();
    const isOverSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: COLORS.baseColor,
                top: 0,
                left: 0,
                mb: 5,
                backdropFilter: 'blur(2px)',
                py: { sm: 1 },
            }}
        >
            <Container>
                <Stack
                    direction={{ sm: 'row', xs: 'column' }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box component={isOverSm ? 'h1' : 'h2'}>
                        <MuiLink
                            href="/"
                            component={NextLink}
                            color={COLORS.whiteColor}
                            underline="none"
                        >
                            CaCaCa Blog
                        </MuiLink>
                    </Box>

                    <Stack direction="row" justifyContent="space-between">
                        {navItems.map((navItem, idx) => (
                            <NavItem navItem={navItem} key={idx} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    );
};
