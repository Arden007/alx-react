import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

describe("Test component renderring ", () => {
  it("should renders App without crashing", () => {
    const App = shallow(<App />);
    expect(App).toBeDefined();
  });
  it("should render Notifications component", () => {
    const App = shallow(<App />);
    expect(App.contains(<Notifications />)).toBe(true);
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
    expect(App.find("CourseList")).toHaveLength(0);
  });
  it("verify that the CourseList component is included and not Login", () => {
    const App = shallow(<App isLoggedIn={true} />);
    expect(App.find("CourseList").exists());
    expect(App.find("Login")).toHaveLength(0);
  });
});
