import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

const courseReducer = (state = [], action) => {
  if (action.type === FETCH_COURSE_SUCCESS) {
    return action.data.map((course) => {
      return {
        ...course,
        isSelected: false,
      };
    });
  } else if (action.type === SELECT_COURSE) {
    return state.map((course, index) => {
      const current = {
        ...course,
      };
      if (course.id === action.index) {
        current.isSelected = true;
      }

      return current;
    });
  } else if (action.type === UNSELECT_COURSE) {
    return state.map((course) => {
      const current = {
        ...course,
      };
      if (course.id === action.index) {
        current.isSelected = false;
      }

      return current;
    });
  } else {
    return state;
  }
};

export default courseReducer;
