import { fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

const initialState = fromJS({
  filter: "DEFAULT",
  notifications: [],
});

const notificationReducer = (state = initialState, action) => {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    const newNotifications = action.data.map((notification) =>
      fromJS({
        ...notification,
        isRead: false,
      })
    );

    return state.set("notifications", newNotifications);
  }

  if (action.type === MARK_AS_READ) {
    const index = state
      .get("notifications")
      .findIndex((notification) => notification.get("id") === action.index);

    return state.setIn(["notifications", index, "isRead"], true);
  }

  if (action.type === SET_TYPE_FILTER) {
    return state.set("filter", action.filter);
  }

  return state;
};

export default notificationReducer;
