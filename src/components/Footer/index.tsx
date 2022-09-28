import dayjs from 'dayjs';
import { Box, Container } from '@mui/material';

import { COLORS } from '#src/styles';

export const Footer: React.FC = () => {
    return (
        <Box
            textAlign="right"
            bgcolor={COLORS.baseColor}
            color={COLORS.whiteColor}
            mt={5}
            p={2}
        >
            <Container>&copy;{dayjs().year()} - CaCaCa Blog</Container>
        </Box>
    );
};
