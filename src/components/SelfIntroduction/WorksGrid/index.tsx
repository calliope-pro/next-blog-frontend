import { Grid } from '@mui/material';
import { WorksGridItem } from './WorksGridItem';

export const WorksGrid: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <WorksGridItem
                image="https://www.kyo-u.cloud/og.png"
                href="https://www.kyo-u.cloud"
                title="KYO-U"
                description="GCSを用いた安全で簡単なファイル共有サービスです。
                        特定の人への共有が可能です。
                        全てのファイル形式をサポートし、
                        データ品質を保ったまま共有できます。"
            />
            <WorksGridItem
                image="https://scholar-1-e4000274.deta.app/logo.png"
                href="https://scholar-1-e4000274.deta.app"
                title="東工大奨学金検索サイト"
                description="大学の奨学金サイトでは検索しにくいため、検索できるようにしました。"
            />
            <WorksGridItem
                image="https://opengraph.githubassets.com/38979e708040a9c78f27c997e064e0aabb49a8ffa1c889eb8eda17c497f4487c/calliope-pro/algorithm"
                href="https://github.com/calliope-pro/algorithm"
                title="競技プログラミング"
                description="AtCoderをはじめとした競技プログラミングに関するGitHubのディレクトリです。"
            />
        </Grid>
    );
};
