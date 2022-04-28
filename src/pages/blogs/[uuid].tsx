import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BlogDetail } from '#src/components';
import { ClientLayout } from '#src/layouts/client';

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
    <ClientLayout isAdsExist>
      <>{uuid && <BlogDetail uuid={uuid} />}</>
    </ClientLayout>
  );
};

export default BlogDetailPage;
