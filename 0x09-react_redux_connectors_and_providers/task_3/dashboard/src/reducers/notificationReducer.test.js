import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { fromJS } from "immutable";

describe("notificationReducer", () => {
  it("should return the initial state", () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      filter: "DEFAULT",
      notifications: [],
    });
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS correctly", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expectedState = fromJS({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    });

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ correctly", () => {
    const initialState = fromJS({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    });

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = fromJS({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    });

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle SET_TYPE_FILTER correctly", () => {
    const initialState = fromJS({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };

    const expectedState = fromJS({
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    });

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
