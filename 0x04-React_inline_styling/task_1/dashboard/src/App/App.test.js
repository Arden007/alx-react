import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test component renderring ", () => {
  it("should renders App without crashing", () => {
    const App = shallow(<App />);
    expect(App).toBeDefined();
  });
  it("should render Notifications component", () => {
    const App = shallow(<App />);
    expect(App.containsMatchingElement(<Notifications />)).toBe(false);
  });
  it("should render Header component", () => {
    const App = shallow(<App />);
    expect(App.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const App = shallow(<App />);
    expect(App.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const App = shallow(<App />);
    expect(App.contains(<Footer />)).toBe(true);
  });
  it("test to check that CourseList is not displayed", () => {
    const App = shallow(<App isLoggedIn={false} />);
    expect(App.contains(<CourseList />)).toBe(false);
  });
  it("verify that the CourseList component is included and not Login", () => {
    const App = shallow(<App isLoggedIn={true} />);
    expect(App.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(App.contains(<Login />)).toBe(false);
  });
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const App = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    App.unmount();
  });

  document.alert = jest.fn();
  it("the alert function is called", () => {
    const App = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    App.unmount();
  });

  it('the alert is "Logging you out"', () => {
    const App = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    App.unmount();
  });
  window.alert.mockClear();
});
