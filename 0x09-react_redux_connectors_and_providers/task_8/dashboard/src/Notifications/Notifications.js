import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { connect } from "react-redux";
import {
  fetchNotifications,
  markAsRead,
} from "../actions/notificationActionCreators";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";
import { getUnreadNotifications } from "../selectors/notificationSelectors"; // Import the selector
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    // Call fetchNotifications when the component mounts
    this.props.fetchNotifications();
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      this.props.displayDrawer !== nextProps.displayDrawer
    );
  }

  markAsRead(id) {
    // Use markAsRead action creator instead of logging
    this.props.markAsRead(id);
  }

  render() {
    return (
      <>
        {!this.props.displayDrawer ? (
          <div
            className={css(notificationStyles.menuItem)}
            onClick={this.props.handleDisplayDrawer}
          >
            Your notifications
          </div>
        ) : (
          <div className={css(notificationStyles.notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
                outline: "none",
                marginRight: "10px",
              }}
              onClick={() => this.props.setNotificationFilter("URGENT")}
            >
              ‼️ Set URGENT Filter
            </button>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={() => this.props.setNotificationFilter("DEFAULT")}
            >
              💠 Set DEFAULT Filter
            </button>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              className={css(notificationStyles.button)}
              onClick={(e) => {
                console.log("Close button has been clicked");
                this.props.handleHideDrawer();
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(notificationStyles.ul)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={() => this.markAsRead(val.id)} // Use markAsRead method
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const notificationStyles = StyleSheet.create({
  notifications: {
    border: "3px dotted var(--holberton-red)",
    padding: "6px 12px",
    position: "absolute",
    top: "21px",
    right: "7px",
    marginTop: "12px",
    zIndex: "100",
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },
  menuItem: {
    position: "relative",
    zIndex: 100,
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
  button: {
    "@media (max-width: 900px)": {
      position: "relative",
      float: "right",
    },
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

// Use the selector to get unread notifications
const mapStateToProps = (state) => ({
  displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
