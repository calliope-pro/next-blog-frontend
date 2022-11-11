import { NextApiRequest, NextApiResponse } from 'next';
import mql from '@microlink/mql';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const url = req.query.url as string;
    const { data, status } = await mql(url);
    
    if (status === 'fail') {
        return res.status(400).send('Bad Request')
    }
    return res.status(200).json(data);
}
