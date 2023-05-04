import React from "react";
import "./Notifications.css";
import { NotificationsData } from "../../Data/Data";

const Notifications = () => {
  return (
    <div className="Notifications">
      {NotificationsData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
