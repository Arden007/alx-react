import React from "react";
import icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        {this.props.displayDrawer ? (
          <div className="flex-area">
            <div className="menuItem">
              <p>Your notifications</p>
            </div>
            <div className={css(styles.notifications)}>
              <ul>
                {this.props.listNotifications &&
                this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(
                    ({ id, html, type, value }) => (
                      <>
                        <NotificationItem
                          key={id}
                          type={type}
                          value={value}
                          html={html}
                          markAsRead={this.markAsRead}
                        />
                      </>
                    )
                  )
                ) : (
                  <div className="notification-header">
                    <NotificationItem value="No new notification for now" />
                    <button
                      style={{
                        color: "#3a3a3a",
                        fontWeight: "bold",
                        background: "none",
                        border: "none",
                        fontSize: "10px",
                        position: "absolute",
                        right: "2px",
                        top: "2px",
                        cursor: "pointer",
                      }}
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img src={icon} alt="closeIcon" width="10px" />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  Notifications: {
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
    textAlign: "right",
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
export default Notifications;
