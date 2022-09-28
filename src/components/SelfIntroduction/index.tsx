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
        <Box component="p">CaCaCa Blogをご覧いただきありがとうございます。</Box>
        <Box component="p">
          初めまして、現在東京工業大学生命理工学系に所属している大学3年生(2022年4月時点)で、専攻とは別に趣味の一つとしてプログラミングをしており、Web開発をメインにしています。
          AtCoder(緑)にて競技プログラミングに参加したり、機械学習も勉強しています。
          <br />
          現在はLancers・CrowdWorksでのクラウドソーシング、ITベンチャー2社にてインターン、またプログラミングスクール1社にてメンターとして活動しています。
        </Box>
        <Box component="p">
          今回は、Next.js + TypeScript +
          FastAPIをメインに当サイトを作成しました。
          当サイトはポートフォリオ兼ブログサイトとなっています。
          プログラミングのことが主になると思いますが、その他のこともブログに作成していきたいと思います。
        </Box>

        <Typography variant="h3" textAlign="center">
          Skill
        </Typography>
        <SkillList />

        <Typography variant="h3" textAlign="center">
          Contact
        </Typography>
        <ContactForm />
      </Container>
    </Stack>
  );
};
