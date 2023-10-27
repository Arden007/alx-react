import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App component renderring ", () => {
    it("test that App renders without crashing", () => {
        const app = shallow(<App/>);
        expect(app).toBeDefined();
    });
    it("App renders a div with the class", () => {
        const app = shallow(<App />);
        expect(app.find('.App-header')).toBeDefined();
    });
    it("App renders a div with the class", () => {
      const app = shallow(<App />);
      expect(app.find(".App-body")).toBeDefined();
    });
    it("App renders a div with the class", () => {
      const app = shallow(<App />);
      expect(app.find(".App-footer")).toBeDefined();
    });
});