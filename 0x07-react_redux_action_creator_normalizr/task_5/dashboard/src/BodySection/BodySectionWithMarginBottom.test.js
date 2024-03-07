import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("check the BodySectionWithMarginBottom renders correctly", () => {
  it("cheecking the component is rendering correctly", () => {
    const bottomMargin = shallow(<BodySectionWithMarginBottom title="bottom margin"/>)
    expect(bottomMargin.find(BodySection)).toHaveLength(1);
    expect(bottomMargin.find(BodySection).html()).toEqual(
      "<div class='bodySection'><h2>bottom margin</h2></div>"
    );
  })
});