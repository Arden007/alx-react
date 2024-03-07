import React from "react";
import Login from "./Login";
import { mount, shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe("checking Login component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Login />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders 2 input tags and 2 label tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

describe("check component with state", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("the submit button should be disabled by default", () => {
    expect(wrapper.state().enableSubmit).toBe(false);
  });
});
