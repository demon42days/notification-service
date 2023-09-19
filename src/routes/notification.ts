import { Router } from "express";
import { postNotification } from "../controllers/notification";
import { checkNotifications } from "../middlewares/checkLastNotification";

const router = Router();

router.post('/', checkNotifications, postNotification);

export { router };
