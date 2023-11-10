import React from "react";
import { shallow } from "enzyme";
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe("render the Login component", () => {
  it("should render the Login", () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it("renders 2 input tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input")).toHaveLength(2);
  });
  it("renders 2 label tags", () => {
    const login = shallow(<Login />);
    expect(login.find("label")).toHaveLength(2);
  });
});
