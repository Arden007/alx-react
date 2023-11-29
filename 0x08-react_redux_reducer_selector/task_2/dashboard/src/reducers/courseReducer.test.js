import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  // Test 1: Default state returns an empty array
  it("should return the initial state", () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual([]);
  });

  // Test 2: FETCH_COURSE_SUCCESS returns the data passed
  it("should handle FETCH_COURSE_SUCCESS correctly", () => {
    const coursesData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData,
    };

    const newState = courseReducer([], action);
    expect(newState).toEqual(coursesData);
  });

  // Test 3: SELECT_COURSE returns the data with the right item updated
  it("should handle SELECT_COURSE correctly", () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const newState = courseReducer(initialState, action);
    expect(newState[1].isSelected).toEqual(true);
  });

  // Test 4: UNSELECT_COURSE returns the data with the right item updated
  it("should handle UNSELECT_COURSE correctly", () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const newState = courseReducer(initialState, action);
    expect(newState[1].isSelected).toEqual(false);
  });
});
