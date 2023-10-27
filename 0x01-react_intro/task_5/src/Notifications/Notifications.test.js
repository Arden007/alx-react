import Notifications from "./Notifications";
import React from "react";
import { shallow } from "enzyme";

describe("Notifications renders", () => {
    it("test that Notifications renders without crashing", () => {
      const notify = shallow(<Notifications />);
      expect(notify).toBeDefined();
    });
    it("Notifications renders three list items", () => {
      const notify = shallow(<Notifications />);
      expect(notify.find("li")).toHaveLength(3);
    });
    it("Notifications renders the text ", () => {
      const notify = shallow(<Notifications />);
      expect(notify.find("p").text()).toEqual("Here is the list of notifications");
    });
    it("Bonus test ul", () => {
      const notify = shallow(<Notifications />);
      expect(notify.find("ul")).toBeDefined();
    });
})