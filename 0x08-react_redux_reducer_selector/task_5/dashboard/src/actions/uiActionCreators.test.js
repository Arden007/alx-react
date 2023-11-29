import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer,
} from "./uiActionCreators";

describe("verify the action creators", () => {
  it("verify that the action for login outputs the correct data", () => {
    const user = { email: 'account@domain.extension', password: 123456789 };
    const data = { type: LOGIN, user };
    const result = login(user.email, user.password);

    expect(result).toEqual(data)
    });
  });

  it("verify that the action for logout", () => {
    const data = { type: LOGOUT };
    const result = logout();

    expect(result).toEqual(data);
  });

  it("verify that the action for displaying notification drawer", () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();

    expect(result).toEqual(data);
  });

  it("verify that the action for hiding notification drawer", () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();

    expect(result).toEqual(data);
  });

