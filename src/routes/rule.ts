import { Router } from "express";
import { postRule, getRule, updateRule } from "../controllers/rule";

const router = Router();

router.post('/', postRule);
router.get('/', getRule);
router.put('/', updateRule);

export { router };
