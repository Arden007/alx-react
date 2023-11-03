import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const notifyItem = shallow(<NotificationItem />);

    expect(notifyItem.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const notifyItem = shallow(<NotificationItem />);

    notifyItem.setProps({ type: "default", value: "test" });
    expect(notifyItem.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const notifyItem = shallow(<NotificationItem html="<u>test</u>" />);


    expect(notifyItem.find("li").html()).toBe("<li><u>test</u></li>");
  });
});
