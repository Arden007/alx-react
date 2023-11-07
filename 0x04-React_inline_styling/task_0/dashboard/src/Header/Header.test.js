import React from "react";
import Header from './Header';
import { shallow } from "enzyme";

describe("render the Header component", () => {
  it("render without crashing", () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
  it("should render a h1", () => {
    const header = shallow(<Header />);
    expect(app.find("h1")).toBeDefined();
  });
  it("should render a image", () => {
    const header = shallow(<Header />);
    expect(app.find("img")).toBeDefined();
  });
});
