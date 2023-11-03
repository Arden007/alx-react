import React from "react";
import { shallow} from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

// configure({ adapter: new Adapter() });

describe("render the Footer component", () => {
  it("should render the Footer", () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });
  it("should render the Copyright text", () => {
    const footer = shallow(<Footer />);
    expect(footer.find("Copyright").at(0)).toBeDefined();
  })
});
