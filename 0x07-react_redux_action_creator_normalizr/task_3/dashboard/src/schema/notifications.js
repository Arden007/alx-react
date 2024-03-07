import * as data from "../../notifications.json";
import { normalize, schema } from "normalizr";

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const notificationsArray = [];

  for (const idx in notifications) {
    if (notifications[idx].author === userId) {
      notificationsArray.push(messages[notifications[idx].context]);
    }
  }

  return notificationsArray;
};

const user = new schema.Entity("users");

const message = new schema.Entity("messsage", {}, { idAttribute: "guid" });

const notification = new schema.Entity(
  "notification",
  {},
  {
    author: user,
    context: message,
  }
);

const normalized = normalize(data, [notification]);

export { normalized };
