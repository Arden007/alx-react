import Notifications from './Notifications';
import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const notify = shallow(<Notifications />);

    expect(notify).toBeDefined();
  });

  it("renders the correct items from the list", () => {
    const notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(notify.find("ul").children()).toHaveLength(
      listNotifications.length
    );
    notify.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(notify.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(notify.find("ul").childAt(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(notify.find("ul").childAt(2).html()).toEqual(
      `<li data-urgent=\"true\">${getLatestNotification()}</li>`
    );
  });

  it("renders the list", () => {
    const notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(notify.find("ul").children()).toHaveLength(3);
    notify.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("check that the text is rendered", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);

    expect(notify.contains(<p>Here is the list of notifications</p>)).toBe(
      false
    );
  });

  it("does not display notifications when displayDrawer is false", () => {
    const notify = shallow(<Notifications displayDrawer={false} />);

    expect(notify.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);

    expect(notify.find("div.menuItem").exists()).toBe(false);
  });

  it("renders Notifications when displayDrawer is true", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);

    expect(notify.find("div.Notifications").exists()).toBe(false);
  });

  it("renders correctly when no list is passed", () => {
    const notify = shallow(<Notifications displayDrawer={true} />);

    expect(
      notify.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it("checking the rendering of component with empty array", () => {
    const notify = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(
      notify.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it("should render component correctly when list have itmes", () => {
    const notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(notify.find("ul").children()).toHaveLength(3);
    notify.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('correct message is displayed depending on the length of the list', () => {
    const notify = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(
      notify.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBe(false);

    expect(
      notify.containsMatchingElement(
        <li data-notification-type="default">No new notification for now</li>
      )
    );
  });

  it("when props are the same component should not update", () => {
    const notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(notify.instance().shouldComponentUpdate(listNotifications)).toBe(
      false
    );
  });

  it("should update list when new items are added", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Foo" },
    ];

    const notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    expect(notify.instance().shouldComponentUpdate(newListNotifications)).toBe(
      true
    );
  });
});

describe("checking click event", () => {
  it("console.log should be called", () => {
    const notify = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    notify.instance().markAsRead = spy;
    notify.instance().markAsRead(1);
    expect(notify.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});