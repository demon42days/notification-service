import { NextFunction, Request, Response } from 'express';
import { getNotificationsByTypeAndEmailDB } from '../services/notification';
import { getRuleDB } from '../services/rule';
import { handleHttp } from '../utils/error.handle';
// En caso de utilizar las reglas definidas en el codigo (utils), descomentar la siguiente linea
// import { rules } from '../utils/rules';


function checkTimeDisponibility (time: number, limitTime: number) {
    const dif =  Date.now() - time;
    const minutes = Math.round(dif/(1000 * 60));
    if(minutes <= limitTime) return false;
    return true;
}

const checkNotifications = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type, email } = req.body;

        // En caso de utilizar las reglas definidas en el codigo (utils), comentar las siguientes dos lineas
        let rules: any = await getRuleDB();
        rules = rules[0].rules;

        if(!rules[type]) throw new Error('This notification "' + type + '" is not defined');

        const response: any = await getNotificationsByTypeAndEmailDB(type, email, rules[type].limit);

        if(response.length === 0 || !response[rules[type].limit - 1]) {
            return next();
        } 
        if(!checkTimeDisponibility(response[rules[type].limit - 1].createdAt.getTime(), rules[type].time)) {
            throw new Error('You are banned for sending a new "' + type.toUpperCase() + '" email to user ' + email);
        }
        return next();
    } catch (err: any) {
        handleHttp(res, 'ERROR_CHECKING_NOTIFICATIONS', err.message)
    }

}

export { checkNotifications };