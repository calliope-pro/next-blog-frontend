import dayjs from 'dayjs';
import { Box, Container } from '@mui/material';

import { COLORS } from '../../styles';

export const Footer: React.FC = () => {
  return (
    <Box
      textAlign='right'
      bgcolor={COLORS.baseColor}
      color={COLORS.whiteColor}
      padding={2}
    >
      <Container>&copy;{dayjs().year()} - CaCaCa Blog</Container>
    </Box>
  );
};
