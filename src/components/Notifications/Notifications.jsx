import React from "react";
import "./Notifications.css";
import { NotificationsData } from "../../Data/Data";

const Notifications = () => {
  return (
    <div className="Notifications">
      {NotificationsData.map((update) => {
        const Img = update.img;
        return (
          <div className="update">
            <div style={{ fontSize: "12px" }}>
              <Img />
            </div>
            <div className="noti">
              <div style={{ marginBottom: "0.5rem", fontWeight:"bold" }}>
                <span>{update.name}</span>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <span> {update.noti}</span>
              </div>
              <span style={{ fontSize: "12px"}}>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
