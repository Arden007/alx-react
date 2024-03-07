import { Map } from "immutable";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

const uiReducer = (state = initialState, action) => {
  if (action.type === DISPLAY_NOTIFICATION_DRAWER) {
    return state.set("isNotificationDrawerVisible", true);
  } else if (action.type === HIDE_NOTIFICATION_DRAWER) {
    return state.set("isNotificationDrawerVisible", false);
  } else if (action.type === LOGIN_SUCCESS) {
    return state.set("isUserLoggedIn", true);
  } else if (action.type === LOGIN_FAILURE || action.type === LOGOUT) {
    return state.set("isUserLoggedIn", false);
  } else {
    return state;
  }
};

export default uiReducer;
