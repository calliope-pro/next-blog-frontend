import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';
import { Container, Typography } from '@mui/material';

import { ClientLayout } from '#src/layouts/client';
import NextLink from 'next/link';

const Term: NextPage = () => {
    return (
        <>
            <NextSeo
                title="利用規約・免責事項"
                description="CaCaCa Blogの利用規約・免責事項"
            />
            <ClientLayout>
                <Container>
                    <Typography variant="h4">利用規約・免責事項</Typography>

                    <Typography variant="h5" mt={2}>
                        免責事項
                    </Typography>
                    <Typography>
                        当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。
                        各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
                        また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        著作権について
                    </Typography>
                    <Typography>
                        当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
                        当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
                        <NextLink href="/#contact">お問い合わせフォーム</NextLink>
                        よりご連絡ください。迅速に対応いたします。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        リンクについて
                    </Typography>
                    <Typography>
                        当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
                        ただし、外部リンクや、<NextLink href="/robots.txt">robots.txt</NextLink>
                        で不許可となっているリンクや、インラインフレームの使用や、画像の直リンクはご遠慮ください。法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
                    </Typography>
                </Container>
            </ClientLayout>
        </>
    );
};

export default Term;
