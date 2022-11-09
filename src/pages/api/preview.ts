import chromium from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const url = req.query.url as string;
        const options = process.env.AWS_REGION
            ? {
                  args: chromium.args,
                  executablePath: await chromium.executablePath,
                  headless: chromium.headless,
              }
            : {
                  args: [],
                  executablePath:
                      process.platform === 'win32'
                          ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
                          : process.platform === 'linux'
                          ? '/usr/bin/google-chrome'
                          : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
              };
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        await page.goto(url);
        const image = await page.screenshot({
            encoding: 'binary',
            type: 'jpeg',
        });
        await browser.close();
        res.status(200).json({
            image: Buffer.from(image).toString('base64'),
        });
    } catch (error) {
        res.status(500).json({
            error: JSON.stringify(error),
        });
    }
}
