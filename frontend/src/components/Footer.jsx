import React, { useEffect, useState } from "react";
import "../assets/style.css";

export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

  return (
    <div className="footer">
      {key !== null && (
        <div className="info">
          <p className="subtotal">Subtotal: ${price}</p>
          {showCheckoutButton ? (
            <a className="check_cart_section" href="/cart">
              <button className="check_cart">Check your Cart</button>
            </a>
          ) : (
            <a className="check_cart_section" href="/Shipping">
              <button className="check_cart">Checkout</button>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
