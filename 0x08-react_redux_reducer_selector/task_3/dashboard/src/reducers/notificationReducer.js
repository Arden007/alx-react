import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

const initialState = {
  filter: "DEFAULT",
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  if (action.type === FETCH_NOTIFICATIONS_SUCCESS) {
    const newNotifications = action.data.map((notification) => ({
      ...notification,
      isRead: false,
    }));

    return {
      filter: state.filter,
      notifications: newNotifications,
    };
  }

  if (action.type === MARK_AS_READ) {
    const updatedNotifications = state.notifications.map((notification) => {
      if (notification.id === action.index) {
        return {
          ...notification,
          isRead: true,
        };
      }
      return notification;
    });

    return {
      ...state,
      notifications: updatedNotifications,
    };
  }

  if (action.type === SET_TYPE_FILTER) {
    return {
      ...state,
      filter: action.filter,
    };
  }

  return state;
};

export default notificationReducer;
