import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing <Footer /> component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Footer />);
  });

  it("Footer Component renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Footer component renders at the very least the text 'Copyright'", () => {
    expect(wrapper.find("p").text()).toContain("Copyright");
  });
});
