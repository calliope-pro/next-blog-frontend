import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ClientLayout } from '#src/layouts/client';
import NextLink from 'next/link';

const PrivacyPolicy: NextPage = () => {
    return (
        <>
            <NextSeo
                title="プライバシーポリシー"
                description="CaCaCa Blogのプライバシーポリシー"
                openGraph={{
                    images: [
                        {
                            url: new URL(
                                '/api/og?title=プライバシーポリシー?description=CaCaCa Blogのプライバシーポリシー',
                                process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            ).href,
                        },
                    ],
                }}
            />
            <ClientLayout>
                <Container>
                    <Typography variant="h4">プライバシーポリシー</Typography>

                    <Typography variant="h5" mt={2}>
                        基本方針
                    </Typography>
                    <Typography>
                        当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
                    </Typography>
                    <Typography variant="h5" mt={2}>
                        適用範囲
                    </Typography>
                    <Typography>
                        本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        個人情報の利用目的
                    </Typography>
                    <Typography>
                        当ブログでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                        取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        個人情報の管理
                    </Typography>
                    <Typography>
                        当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
                        当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        広告について
                    </Typography>
                    <Typography>
                        当ブログでは、第三者配信の広告サービス（Googleアドセンス、株式会社サムライファクトリー社の提供する忍者AdMax）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
                        クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。詳細については、
                        <NextLink
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            Googleのプライバシーポリシー
                        </NextLink>
                        をご覧ください。
                        もし、第三者にデータ送信を行いたくない場合は、ブラウザのCookie機能をオフにしてアクセスしてください。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        アクセス解析ツールについて
                    </Typography>
                    <Typography>
                        当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。詳細については、同様に
                        <NextLink
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener"
                        >
                            Googleのプライバシーポリシー
                        </NextLink>
                        をご覧ください。
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        本プライバシーポリシーの変更
                    </Typography>
                    <Typography>
                        当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。
                        本プライバシーポリシーは、事前の予告なく変更することがあります。
                        本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
                    </Typography>
                </Container>
            </ClientLayout>
        </>
    );
};

export default PrivacyPolicy;
