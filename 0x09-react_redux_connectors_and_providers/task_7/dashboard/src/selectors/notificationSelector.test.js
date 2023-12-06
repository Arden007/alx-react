import { fromJS } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("Notification Selectors", () => {
  // Mocked notification state for testing
  const notificationState = fromJS({
    filter: "DEFAULT",
    notifications: [
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" },
    ],
  });

  // Test filterTypeSelected selector
  it("filterTypeSelected should return the correct filter type", () => {
    const result = filterTypeSelected(notificationState);
    expect(result).toEqual("DEFAULT");
  });

  // Test getNotifications selector
  it("getNotifications should return a list of notifications", () => {
    const result = getNotifications(notificationState);
    expect(result.toJS()).toEqual([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" },
    ]);
  });

  // Test getUnreadNotifications selector
  it("getUnreadNotifications should return a list of unread notifications", () => {
    const result = getUnreadNotifications(notificationState);
    expect(result.toJS()).toEqual([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" },
    ]);
  });
});
