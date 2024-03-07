import { createSelector } from "reselect";

// Selectors
const getNotificationState = (state) => state.get("notifications");

// Selector for the filter
export const filterTypeSelected = createSelector(
  [getNotificationState],
  (notificationState) => notificationState.get("filter")
);

// Selector for all notifications
export const getNotifications = createSelector(
  [getNotificationState],
  (notificationState) => notificationState.get("notifications")
);

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
  [getNotificationState],
  (notificationState) =>
    notificationState
      .get("notifications")
      .filter((notification) => !notification.get("isRead"))
);
