import * as data from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
    return data.filter((contextData) => contextData.author.id === userId).map((contextData) => contextData.context);
};
