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
    const email = "Harden@gmail.com";
    const password = "1234";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "Harden@gmail.com", password: "1234" },
    });
  });

  it("verify that the action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("verify that the action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("verify that the action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
