import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";

const OrderConfirmation = () => {
  // const selector = useSelector((state) => state);
  // const user = JSON.parse(localStorage.getItem("WD_FORUM_LOGIN_USER_KEY"));
  // useEffect(() => {
  // console.log(user);
  // }, []);
  return (
    <div className="shippingpage">
      <div className="thank">
        <div className="heading">
          <br />
          <h4 className="total">- Thank you for your order -</h4>
        </div>

        <div className="note">
          <p className="total">
            <br />
            {/* Thank you for your order <span className="color">{user.user_name}</span>. */}
            We received your request.
            <br />
            <br />
          </p>
          <p className="total">
            Our staff will be contacting with you to tell next steps.
          </p>
        </div>

        <div>
          <br />
          <br />
          <a className="submitorder" href="/">
            <button className="btn3 submitorderbtn3">Back to Home</button>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
