import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export const BlogNotFound: React.FC<{ redirectUrl?: string }> = ({
  redirectUrl = '/',
}) => {
  const router = useRouter();
  const [time, setTime] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => Math.max(prev - 1, 0));
      if (time === 0) {
        router.replace(redirectUrl);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time, router, redirectUrl]);
  return (
    <Box>
      <Typography variant='h5'>Not Found...</Typography>
      <Typography variant='h5'>{time}秒後にリダイレクトします</Typography>
    </Box>
  );
};
