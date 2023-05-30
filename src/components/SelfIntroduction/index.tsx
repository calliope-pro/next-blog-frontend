import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';

import { SkillList } from '#src/components';
import { WorksGrid } from './WorksGrid';

export const SelfIntroduction: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" textAlign="center" letterSpacing={2}>
                Profile
            </Typography>
            <Box component="p">
                東京工業大学生命理工学院生命理工学系の学士4年生(2023年4月～)です。
                <br />
                大学入学後に学問と並行しプログラミングを独学で始め、プログラミング歴は約3年になります。
                研究ではゲノム情報学を専攻しており、ab-initio遺伝子予測ツールを開発する研究を行っております。
                その他では、主にフロントエンド・バックエンドエンジニアとしてWeb開発に携わっております。
                競技プログラミングの
                <NextLink
                    href="https://atcoder.jp/users/calliope"
                    target="_blank"
                    rel="noopener"
                >
                    AtCoder
                </NextLink>
                にもしばしば参加しており、2021年1月に緑コーダーとなりました。
                最近では、機械学習・ディープラーニング(主にNLPに興味があり)も勉強しています。
            </Box>

            <Typography
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
            >
                Detail About
            </Typography>
            <Box component="p">
                当ブログはCMS, デザイン, JWT認証を含め個人実装しました。
                <br />
                フロントエンドは、主にNext.js + TypeScript + Mui + Recoil +
                ReactMarkdown + SWRを用いて、Vercel上にデプロイしています。
                <br />
                バックエンドは、主にFastAPI +
                python-joseを用いて、Deta上にデプロイしています。
                <br />
                フロントエンドのみ
                <MuiLink
                    component={NextLink}
                    href="https://github.com/calliope-pro/next-blog-frontend"
                    target="_blank"
                    rel="noopener"
                >
                    ソースコード(GitHub)
                </MuiLink>
                を公開しています。
            </Box>

            <Typography
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
            >
                Skills
            </Typography>
            <SkillList />

            <Typography
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
            >
                History
            </Typography>
            <Stepper activeStep={99} orientation="vertical">
                <Step>
                    <StepLabel StepIconComponent={() => <Box>2012～</Box>}>
                        ラ・サール学園
                    </StepLabel>
                    <StepContent></StepContent>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={() => <Box>2020～</Box>}>
                        東京工業大学
                    </StepLabel>
                    <StepContent></StepContent>
                </Step>
            </Stepper>

            {/* <Typography
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
            >
                Career
            </Typography>
            <Stepper activeStep={99} orientation="vertical">
                <Step>
                    <StepLabel
                        StepIconComponent={() => <Box>2021～</Box>}
                    ></StepLabel>
                    <StepContent></StepContent>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={() => <Box>2020～</Box>}>
                        東京工業大学
                    </StepLabel>
                    <StepContent></StepContent>
                </Step>
            </Stepper>
            <Typography variant="body1" textAlign="center">
                詳細な職務経歴は、直接お問い合わせください。
            </Typography> */}

            <Typography
                variant="h4"
                textAlign="center"
                letterSpacing={2}
                mt={12}
            >
                Works ･ Projects
            </Typography>
            <WorksGrid />
        </Container>
    );
};
