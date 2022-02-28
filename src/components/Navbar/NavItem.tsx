import type { navItem as navItemType } from '../../types';

import Link from 'next/link';
import { Link as MuiLink, Typography } from '@mui/material';

import { COLORS } from '../../styles';

export const NavItem: React.FC<{ navItem: navItemType }> = ({ navItem }) => {
  return (
    <Link href={navItem.url} passHref>
      <MuiLink
        color={COLORS.whiteColor}
        underline='none'
        padding='4px'
        width={{ xs: '120px', sm: '80px', md: '120px' }}
        position='relative'
        sx={{
          '&::after': {
            position: 'absolute',
            content: '""',
            left: '0',
            bottom: '2px',
            height: '1px',
            width: '100%',
            backgroundColor: COLORS.accentColor,
            transform: 'scale(0, 1)',
            transformOrigin: 'right',
            transition: 'transform 0.3s, bottom 0.1s',
          },
          '&:hover::after': {
            transformOrigin: 'left',
            transform: 'scale(1, 1)',
          },
        }}
      >
        <Typography fontSize='23px' textAlign='center'>
          {navItem.label}
        </Typography>
      </MuiLink>
    </Link>
  );
};
