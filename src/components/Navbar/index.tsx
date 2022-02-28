import type { navItem } from '../../types';

import Link from 'next/link';
import { AppBar, Box, Container, Link as MuiLink, Stack } from '@mui/material';

import { NavItem } from './NavItem';
import { COLORS } from '../../styles';

// 画面上部のナビゲーションバー
export const Navbar: React.FC = () => {
  const navItems: navItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blogs' },
  ];

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: COLORS.baseColor,
      }}
    >
      <Container>
        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Box component='h1'>
            <Link href='/' passHref>
              <MuiLink color={COLORS.whiteColor} underline='none'>
                CaCaCa Blog
              </MuiLink>
            </Link>
          </Box>

          <Stack direction='row' justifyContent='space-between'>
            {navItems.map((navItem, idx) => (
              <NavItem navItem={navItem} key={idx} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
