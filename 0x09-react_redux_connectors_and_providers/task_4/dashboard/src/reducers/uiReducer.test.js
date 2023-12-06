import uiReducer, { initialState } from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("our simple reducer", function () {
  it("verifying the state returned equals the initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("verifying the state returned equals the initial state when the action SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("verifying the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it("verifying the state returned when the action LOGIN is passed", function () {
    const user = { email: "test@test.com", password: "123", isLoggedIn: true };
    const state = uiReducer(undefined, { type: LOGIN, user });
    expect(state.toJS()).toEqual({ ...initialState.toJS(), user });
  });

  it("verifying the state returned when the action LOGOUT is passed", function () {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      user: null,
      isUserLoggedIn: false,
    });
  });
});
