import { NextApiRequest } from 'next';
import { ImageResponse } from '@vercel/og';
import { COLORS } from '#src/styles';

export const config = {
    runtime: 'edge',
};

export default function handler(req: NextApiRequest) {
    const { searchParams } = new URL(req.url as string);
    const hasTitle = searchParams.has('title');
    const title = hasTitle
        ? `${searchParams.get('title')!} | CaCaCa Blog`
        : 'CaCaCa Blog';
    const hasDescription = searchParams.has('description');
    const description = hasDescription
        ? searchParams.get('description')!
        : '主にプログラミングに関することを取り上げるブログ兼ポートフォリオ';
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    padding: '0 120px',
                    rowGap: 60,
                    border: `32px solid ${COLORS.mainColor}`,
                    backgroundColor: '#fff',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        fontSize: 60,
                    }}
                >
                    {title}
                </div>
                <div style={{ width: '100%', fontSize: 36 }}>{description}</div>
                <div
                    style={{
                        position: 'absolute',
                        right: 120,
                        bottom: '10%',
                        backgroundImage: `url(${
                            new URL(
                                '/favicon.png',
                                process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
                            ).href
                        }`,
                        backgroundSize: '100% 100%',
                        height: 60,
                        width: 60,
                    }}
                />
            </div>
        ),
        { width: 1200, height: 630 },
    );
}
