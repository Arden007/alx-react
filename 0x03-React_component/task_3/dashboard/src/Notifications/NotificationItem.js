import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? <li data-notification-type={type}>{value}</li> : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({html: PropTypes.string}),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;