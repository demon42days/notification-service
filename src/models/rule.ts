import { Schema, model } from 'mongoose';
import { Rule } from "../interfaces/rule.interface";

const RuleSchema = new Schema<Rule> (
    {
        rules: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const RuleModel = model("rules", RuleSchema);
export default RuleModel;