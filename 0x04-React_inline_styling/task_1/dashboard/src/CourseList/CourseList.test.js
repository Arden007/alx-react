import React from "react";
import { shallow, mount } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("renders CourseList component without crashing", () => {
  it("renders CourseList component", () => {
    const Course = shallow(<CourseList />);
    expect(Course.exists());
  });
  it("it renders the different rows", () => {
    const courseList = shallow(<CourseList />);
    // CourseListRow is rendered inside CourseList component
    expect(courseList.find("CourseListRow")).toHaveLength(5);
  });
  it("CourseList renders correctly if you pass an empty array", () => {
    const listCourses = [];
    let courseList = shallow(<CourseList />);
    expect(
      courseList.find("CourseListRow").last().props().textFirstCell
    ).toEqual("No course available yet");
    courseList = shallow(<CourseList listCourses={[]} />);
    expect(
      courseList.find("CourseListRow").last().props().textFirstCell
    ).toEqual("No course available yet");
  });
  it("When you pass a list of courses, the component renders it correctly", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const courseList = shallow(<CourseList listCourses={listCourses} />);
    expect(
      courseList.findWhere((node) => {
        return node.props().textFirstCell === "ES6";
      })
    ).toHaveLength(1);
    expect(
      courseList.findWhere((node) => {
        return node.props().textFirstCell === "Webpack";
      })
    ).toHaveLength(1);
    expect(
      courseList.findWhere((node) => {
        return node.props().textFirstCell === "React";
      })
    ).toHaveLength(1);
  });
});
