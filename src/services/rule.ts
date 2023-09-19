import RuleModel from '../models/rule';

const insertRuleDB = async (rule: object) => {
    const response = await RuleModel.create(rule);
    return response;
};

const getRuleDB = async () => {
    const response = await RuleModel.find();
    return response;
};

const updateRuleDB = async (rule: object) => {
    const response = await RuleModel.findOneAndUpdate({}, rule, {
        new: true
    });
    return response;
};

export { insertRuleDB, getRuleDB, updateRuleDB };