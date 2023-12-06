import React, { useEffect } from "react";
import { connect } from "react-redux";
import Notifications from "./Notifications";
import { fetchNotifications } from "../actions/notificationActionCreators";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";
import { getUnreadNotifications } from "../selectors/notificationSelectors";

const NotificationsContainer = (props) => {
  useEffect(() => {
    // Fetch notifications on mount
    props.fetchNotifications();
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <Notifications
      {...props} // Pass all props to Notifications component
    />
  );
};

const mapStateToProps = (state) => ({
  displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);
