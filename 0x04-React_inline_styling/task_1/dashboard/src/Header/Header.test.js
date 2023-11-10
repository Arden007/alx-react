import React from "react";
import Header from './Header';
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe("render the Header component", () => {
  it("render without crashing", () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
  it("should render a h1", () => {
    const header = shallow(<Header />);
    expect(header.find("h1")).toBeDefined();
  });
  it("should render a image", () => {
    const header = shallow(<Header />);
    expect(header.find("img")).toBeDefined();
  });
});
