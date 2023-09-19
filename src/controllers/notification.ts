import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertNotificationDB } from "../services/notification";
import { sendEmail } from "../services/email";


const postNotification = async ({body}: Request, res: Response) => {
    try {
        const { type, email } = body;
        const responseDb = await insertNotificationDB(type, email);
        const response = await sendEmail(type, email);
        res.send(response);
    } catch (err: any) {
        handleHttp(res, 'ERROR_CREATING_NOTIFICATION', err.message)
    }
};

export { postNotification };
