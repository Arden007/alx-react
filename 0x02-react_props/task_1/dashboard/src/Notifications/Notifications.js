import React from "react";
import './Notifications';
import { getLatestNotifications } from "../utils/utils";
import icon from '../assets/close-icon.png';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          color: "#3a3a3a",
          fontWeight: "bold",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "2px",
          top: "2px",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={icon} alt="Close" width="15px" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotifications() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
