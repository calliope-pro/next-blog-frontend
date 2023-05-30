import type { navItem } from '#src/types';

import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { NavItem } from './NavItem';
import { COLORS } from '#src/styles';

// 画面上部のナビゲーションバー
export const Navbar: React.FC = () => {
    const navItems: navItem[] = [
        { label: 'Home', url: '/' },
        { label: 'Portfolio', url: '/portfolio' },
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
                mb: 4,
                backdropFilter: 'blur(2px)',
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
