import { Schema, model } from 'mongoose';
import { Notification } from "../interfaces/notification.interface";

const NotificationSchema = new Schema<Notification> (
    {
        email: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const NotificationModel = model("notifications", NotificationSchema);
export default NotificationModel;