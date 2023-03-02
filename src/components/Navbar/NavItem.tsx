import type { navItem as navItemType } from '#src/types';

import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { COLORS } from '#src/styles';

export const NavItem: React.FC<{ navItem: navItemType }> = ({ navItem }) => {
    return (
        <MuiLink
            component={NextLink}
            href={navItem.url}
            color={COLORS.whiteColor}
            underline="none"
            p={1}
            width={{ xs: '120px', sm: '80px', md: '120px' }}
            position="relative"
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
            <Typography fontSize={23} textAlign="center">
                {navItem.label}
            </Typography>
        </MuiLink>
    );
};
