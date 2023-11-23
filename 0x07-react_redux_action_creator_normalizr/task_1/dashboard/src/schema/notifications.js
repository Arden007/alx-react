import * as data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
    return data.filter((contextData) => contextData.author.id === userId).map((contextData) => contextData.context);
};

const user = new schema.Entity("users");

const message = new schema.Entity("messsage", {}, { idAttribute: "guid" });

const notification = new schema.Entity('notification', {}, {
    author: user,
    context: message
});

const normalized = normalize(data, [notification]);

export { normalized };
