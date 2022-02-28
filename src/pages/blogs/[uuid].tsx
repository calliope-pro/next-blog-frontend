import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BlogDetail, Navbar } from '../../components';

const BlogDetailPage: NextPage = () => {
  const router = useRouter();
  const [uuid, setUuid] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (router.isReady) {
      const uuid = router.query.uuid as string;
      setUuid(uuid);
    }
  }, [router]);
  return (
    <>
      <Navbar />
      <>{uuid && <BlogDetail uuid={uuid} />}</>
    </>
  );
};

export default BlogDetailPage;
