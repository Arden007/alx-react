import * as data from "../../notifications.json";
import { normalize, schema } from "normalizr";

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

// Define the notificationsNormalizer function
const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};

// Normalize data using notificationsNormalizer function
const normalized = notificationsNormalizer(data);

export { normalized, notificationsNormalizer };
