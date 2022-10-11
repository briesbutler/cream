import React, { useEffect, useState } from "react";
import "./assets/style.css";
import Router from "./Router";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { getUser } from "./reducks/users/selectors";
import { getSubtotal } from "./reducks/carts/selectors";

let pageUrl = window.location.toString();

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    if (pageUrl.includes("Shipping") || pageUrl.includes("Thankyou")) {
      setShowFooter(false);
    }
    dispatch(fetchUserFromLocalStorage());
  }, []);

  if (!localStorage.getItem("WD_FORUM_LOGIN_USER_KEY")) {
    if (
      pageUrl.includes("cart") ||
      pageUrl.includes("Shipping") ||
      pageUrl.includes("Thankyou")
    ) {
      window.location.replace("/");
    }
  }

  return (
    <>
      <Router />
      {showFooter && <Footer price={subtotal} />}
    </>
  );
}

export default App;
