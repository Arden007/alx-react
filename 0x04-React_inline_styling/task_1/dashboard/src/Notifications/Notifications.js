import React from "react";
import icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

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
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "10px",
    width: "95vw",
  },

  'li[data-notification-type="default"]': {
    color: "blue",
  },

  'li[data-notification-type="urgent"]': {
    color: red,
  },
});
export default Notifications;
