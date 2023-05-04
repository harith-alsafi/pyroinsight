import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Notifications from "../Notifications/Notifications";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Notifications</h3>
        <Notifications />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
