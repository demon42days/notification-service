import { Response } from 'express';

const handleHttp = (res: Response, error: string, message?: any) => {
    res.status(400);
    res.send({ code: error, message});
}

export { handleHttp };