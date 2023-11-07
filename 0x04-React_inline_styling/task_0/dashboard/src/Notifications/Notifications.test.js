import Notifications from './Notifications';
import React from "react";
import { shallow } from "enzyme";

describe("Notifications renders", () => {
  it("test that Notifications renders without crashing", () => {
    const notify = shallow(<Notifications />);
    expect(notify).toBeDefined();
  });
  it("Notifications renders three list items", () => {
    const notify = shallow(<Notifications />);
    expect(notify.find("NotificationItem")).toHaveLength(3);
  });
  it("Notifications renders the text ", () => {
    const notify = shallow(<Notifications />);
    expect(notify.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });
  it("NotificationItem element renders the right html", () => {
    const notify = shallow(<Notifications />);
    expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>')
  });
  it("the menu item is being displayed when displayDrawer is false", () => {
    const notify = shallow(<Notifications />);
    expect(notify.find(".menuItem")).toHaveLength(1);
  });
  it("the div.Notifications is not being displayed when displayDrawer is false", () => {
    const notify = shallow(<Notifications />);
    expect(notify.find(".Notifications")).toHaveLength(0);
  });
  it("the menu item is being displayed when displayDrawer is true", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);
    expect(notify.find(".menuItem")).toHaveLength(1);
  });
  it("the div.Notifications is being displayed when displayDrawer is true", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);
    expect(notify.find(".Notifications")).toHaveLength(1);
  });
})