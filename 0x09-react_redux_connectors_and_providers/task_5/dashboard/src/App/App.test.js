import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { fromJS } from "immutable";
import App from "./App";

describe("Test App.js", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App />);
  });

  it("Renders App without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("App component contains Notifications component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("App component contains Login component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });  
});
