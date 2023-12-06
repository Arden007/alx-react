import { fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";

const initialState = fromJS({
  filter: "DEFAULT",
  notifications: [],
  loading: false, // Add loading attribute to the initial state
});

const notificationReducer = (state = initialState, action) => {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    const newNotifications = action.data.map((notification) =>
      fromJS({
        ...notification,
        isRead: false,
      })
    );

    // Perform a mergeDeep with the data
    return state.mergeDeep({ notifications: newNotifications, loading: false });
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

  // Add a case to handle SET_LOADING_STATE and update the state accordingly
  if (action.type === SET_LOADING_STATE) {
    return state.set("loading", action.isLoading);
  }

  return state;
};

export default notificationReducer;
