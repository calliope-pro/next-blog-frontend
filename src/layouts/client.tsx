import Script from 'next/script';
import { Stack } from '@mui/material';

import { Footer, Navbar } from '#src/components';

type ClientLayoutPropType = {
  isAdsExist?: boolean;
};

export const ClientLayout: React.FC<ClientLayoutPropType> = ({
  children,
  isAdsExist,
}) => {
  const AdmaxAd = (
    <>
      <div
        className="admax-ads"
        data-admax-id="f11b860d747ce3037ea1083fec43a96b"
        style={{
          display: 'inline-block',
          width: '728px',
          height: '90px',
          margin: '0 auto',
        }}
      />
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            '(admaxads = window.admaxads || []).push({admax_id: "f11b860d747ce3037ea1083fec43a96b",type: "banner"});',
        }}
      />
      <Script
        type="text/javascript"
        charSet="utf-8"
        src="https://adm.shinobi.jp/st/t.js"
        async
      />
    </>
  );
  return (
    <Stack minHeight="100vh">
      <Navbar />
      {children}
      {isAdsExist && AdmaxAd}
      <Footer />
    </Stack>
  );
};
