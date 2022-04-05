import { Stack } from '@mui/material';
import { Footer, Navbar } from '#src/components';

export const ClientLayout: React.FC = ({ children }) => {
  return (
    <Stack minHeight="100vh">
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
};
