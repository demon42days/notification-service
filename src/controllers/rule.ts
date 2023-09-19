import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertRuleDB, getRuleDB, updateRuleDB } from "../services/rule";


const postRule = async ({body}: Request, res: Response) => {
    try {
        const checkIfExist = await getRuleDB();
        let response: any;
        
        if(checkIfExist.length === 0) {
            response = await insertRuleDB(body);
        } else {
            response = await updateRuleDB(body);
        }
        res.send(response);
    } catch (err: any) {
        handleHttp(res, 'ERROR_CREATING_RULE', err.message)
    }
};

const getRule = async (req: Request, res: Response) => {
    try {
        const response = await getRuleDB();
        res.send(response);
    } catch (err: any) {
        handleHttp(res, 'ERROR_GETTING_RULE', err.message)
    }
};

const updateRule = async ({body}: Request, res: Response) => {
    try {
        const response = await updateRuleDB(body);
        res.send(response);
    } catch (err: any) {
        handleHttp(res, 'ERROR_CREATING_RULE', err.message)
    }
};


export { postRule, getRule, updateRule };
