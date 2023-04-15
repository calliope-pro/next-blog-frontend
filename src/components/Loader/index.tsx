import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40vh',
            }}
        >
            <CircularProgress size={120} sx={{ animationDuration: '2s' }} />
        </Box>
    );
};
