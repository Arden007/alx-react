import { fromJS } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";

const initialState = fromJS({
  courses: [],
});

const courseReducer = (state = initialState, action) => {
  if (action.type === FETCH_COURSE_SUCCESS) {
    const normalizedData = coursesNormalizer(action.data);
    return state.update("courses", (courses) =>
      courses.merge(fromJS(normalizedData.entities.courses))
    );
  } else if (action.type === SELECT_COURSE) {
    const selectedCourseIndex = state
      .get("courses")
      .findIndex((course) => course.get("id") === action.index);
    return state.setIn(["courses", selectedCourseIndex, "isSelected"], true);
  } else if (action.type === UNSELECT_COURSE) {
    const unselectedCourseIndex = state
      .get("courses")
      .findIndex((course) => course.get("id") === action.index);
    return state.setIn(["courses", unselectedCourseIndex, "isSelected"], false);
  } else {
    return state;
  }
};

export default courseReducer;
