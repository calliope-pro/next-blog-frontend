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
                    初めまして、私は東京工業大学の生命理工学系に所属しており、2022年4月時点で大学3年生となります。
                    専攻とは別に独学でプログラミングを始め、現在はWeb開発をメインに活動しています。
                    競技プログラミングのAtCoderにもしばしば参加しており、2021年1月に緑コーダーとなりました。
                    最近では、機械学習・ディープラーニングも勉強しています。
                    <br />
                    現在はLancers・CrowdWorksでのクラウドソーシング、ITベンチャーにてインターン・フリーランス、またプログラミングスクールにてメンターとして活動しています。
                    お仕事やお問い合わせ等に関しましてはお手数をお掛けしますが以下の
                    <Link href="#contact">フォーム</Link>にてお願いいたします。
                </Box>
                <Box component="p">
                    今回は、Next.js + TypeScript +
                    FastAPIをメインに当サイトを作成しました。
                    当サイトはポートフォリオ兼ブログサイトとなっています。
                    プログラミングのことが主になるとは思いますが、その他のこともブログにしていきたいと思います。
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
