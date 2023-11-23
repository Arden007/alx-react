import React from "react";
import { shallow } from "enzyme";
import { CourseList } from "./CourseList";

describe("renders CourseList component without crashing", () => {
  it("renders CourseList component", () => {
    const Course = shallow(<CourseList />);
    expect(Course.exists()).toBe(true);
  })
  it("it renders the 5 different rows", () => {
    const courseList = shallow(<CourseList />);
    // CourseListRow is rendered inside CourseList component
    expect(courseList.find("CourseListRow")).toHaveLength(5);
  });
});
