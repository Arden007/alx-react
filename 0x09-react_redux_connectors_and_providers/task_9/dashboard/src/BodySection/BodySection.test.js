import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe("the component should render correctly", () => {
  it("checking the children and one h2 element", () => {
    const bodySection = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(bodySection.find("h2").html()).toEqual("<h2>test title</h2>");
    expect(bodySection.find('p').text()).toEqual("test children node");;
  });
});