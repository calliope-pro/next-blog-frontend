import chromium from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const url = req.query.url as string;

        const image = await getImageBase64(url);

        res.status(200).json({
            image,
        });
    } catch (error) {
        res.status(500).json({
            error: JSON.stringify(error),
        });
    }
}

const getImageBase64 = async (url: string) => {
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const image = await page.screenshot({ encoding: 'base64' });
    await browser.close();
    return image;
};
