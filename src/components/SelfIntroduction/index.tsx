import Link from 'next/link';
import { Box, Container, Stack, Typography } from '@mui/material';

import { SkillList } from '#src/components';
import { ContactForm } from './ContactForm';

export const SelfIntroduction: React.FC = () => {
    return (
        <Stack>
            <Container>
                <Typography variant="h3" textAlign="center">
                    About
                </Typography>
                <Box component="p">
                    CaCaCa Blogをご覧いただきありがとうございます。
                </Box>
                <Box component="p">
                    Next.js + TypeScript +
                    FastAPIをメインに当サイトを作成しました。
                    当サイトはポートフォリオ兼ブログサイトとなっています。
                    プログラミングのことが主になるとは思いますが、その他のこともブログにしていきたいと思います。
                </Box>
                <Box component="p">
                    初めまして、私は東京工業大学の生命理工学系に所属しており、2022年4月時点で大学3年生となります。
                    入学後にプログラミングを始め、現在は研究ではゲノム情報、仕事では主にWeb開発に携わっております。
                    競技プログラミングの
                    <Link
                        href="https://atcoder.jp/users/calliope"
                        target="_blank"
                        rel="noopener"
                    >
                        AtCoder
                    </Link>
                    にもしばしば参加しており、2021年1月に緑コーダーとなりました。
                    最近では、機械学習・ディープラーニングも勉強しています。
                    <br />
                    現在はLancers・CrowdWorksといったクラウドソーシング、ITベンチャーにてインターン・フリーランス、またプログラミングスクールにてメンターとして活動しています。
                    過去の実績等は<Link href='/works'>こちら</Link>から確認できます。お問い合わせやお仕事等に関しましてはお手数をお掛けしますが以下の
                    <Link href="#contact">フォーム</Link>にて連絡をお願いいたします。
                </Box>

                <Typography variant="h3" textAlign="center">
                    Skills
                </Typography>
                <SkillList />

                <Typography id="contact" variant="h3" textAlign="center">
                    Contact
                </Typography>
                <ContactForm />
            </Container>
        </Stack>
    );
};
