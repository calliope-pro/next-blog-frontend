import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export const BlogNotFound: React.FC<{ redirectUrl?: string }> = ({
  redirectUrl = '/',
}) => {
  const router = useRouter();
  const [time, setTime] = useState(10);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const timer = setInterval(async () => {
      setTime((prev) => Math.max(prev - 1, 0));
      if (time === 0) {
        await router.replace(redirectUrl);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time, router, redirectUrl]);
  return (
    <Box>
      <Typography variant="h5">Not Found...</Typography>
      <Typography variant="h5">{time}秒後にリダイレクトします</Typography>
    </Box>
  );
};
