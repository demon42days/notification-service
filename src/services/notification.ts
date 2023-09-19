import NotificationModel from '../models/notification';

const insertNotificationDB = async (type: string, email: string) => {
    const notification = {
        type,
        email
    };
    const response = await NotificationModel.create(notification);
    return response;
};

const getNotificationsByTypeAndEmailDB = async (type: string, email: string, limit: number) => {
    const response = await NotificationModel.find({ 'type': type, 'email' : email}).limit(limit).sort({createdAt:'desc'});
    return response;
};

export { insertNotificationDB, getNotificationsByTypeAndEmailDB };