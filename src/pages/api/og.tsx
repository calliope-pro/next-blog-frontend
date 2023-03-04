import { NextApiRequest } from 'next';
import { ImageResponse } from '@vercel/og';

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
            <div tw="flex h-full items-center bg-white justify-center">
                <div tw="bg-gray-50 flex">
                    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
                        <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                            <span>{title}</span>
                            <span tw="text-indigo-600">{description}</span>
                        </h2>
                        <div tw="mt-8 flex md:mt-0">
                            <div tw="flex rounded-md shadow">
                                <a
                                    href="#"
                                    tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white"
                                >
                                    Get started
                                </a>
                            </div>
                            <div tw="ml-3 flex rounded-md shadow">
                                <a
                                    href="#"
                                    tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 },
    );
}
