import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../API";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { deleteCart, fetchCarts } from "../reducks/carts/operations";
import { addOrder } from "../reducks/order/operations.js";
import "../assets/style.css";
import Navbar from "../components/Navbar";
// import { push } from "connected-react-router";
const api = new API();

const Shipping = () => {
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const subtotal = getSubtotal(selector);
  const carts = getCarts(selector);

  const [full_name, setFullName] = useState(""),
    [phone, setPhone] = useState(""),
    [address, setAddress] = useState(""),
    [pincode, setPincode] = useState(""),
    [apt, setApt] = useState(""),
    [city, setCity] = useState(""),
    [state, setState] = useState(""),
    [totalitem, setTotalItem] = useState(0);

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  // useEffect(() => {
  //   let arr = [];
  //   if (carts != undefined && carts.length > 0) {
  //     for (let key in carts) {
  //       arr = carts[key].quantity;
  //     }
  //     let sum = arr.reduce(function (a, b) {
  //       return a + b;
  //     }, 0);
  //     setTotalItem(sum);
  //   }
  // }, [carts]);

  const inputFullname = (e) => {
    setFullName(e.target.value);
  };

  const inputPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const inputAddress = (e) => {
    setAddress(e.target.value);
  };

  const inputPin = (e) => {
    setPincode(e.target.value);
  };

  const inputHouse = (e) => {
    setApt(e.target.value);
  };

  const inputCity = (e) => {
    setCity(e.target.value);
  };

  const inputState = (e) => {
    setState(e.target.value);
  };

  // const clickAddCart = () => {
  //   if (key) {
  //     // ///// console.log("item-key-addcart1");
  //     const id = key.slice(8, -2);
  //     // dispatch(addCart(item, user));
  //     dispatch(addCart(item, id));
  //     // ///// console.log("item-key-addcart2");
  //   } else {
  //     // ///// console.log("item-key-addcart3");
  //     // dispatch({ handleClick });
  //     const { handleLoginClick } = props;
  //     handleLoginClick();
  //   }
  // };

  const orderButton = (e) => {
    const id = key.slice(8, -2);
    let params = {
      user_id: id,
      total_price: subtotal,
      full_name: full_name,
      address_line1: address,
      address_line2: apt,
      city: city,
      state: state,
      postal_code: pincode,
      country: "US",
      telephone: phone,
    };
    dispatch(addOrder(params));
    e.preventDefault();
    // let allCarts = dispatch(fetchCarts());
    // console.log("allCarts", allCarts);
    console.log("carts", carts);
    for (var i = 0; i < carts.length; i++) {
      let cartID = carts[i].id;
      dispatch(deleteCart(cartID));
      // dispatch("Thankyou");
    }
    window.location.replace("/Thankyou");
  };

  return (
    <div className="shippingpage">
      {/* <section className="order"> */}
      {/* <div className="heading"></div> */}
      {/* </section> */}
      <section className="formcolor">
        <Navbar />
        <div className="form">
          <div className="formheadings">
            <div className="forminner">
              <h4 className="totalheading">-Order your Items-</h4>
              <h3 className="total">Shipment Details</h3>
              <br />
              <p className="textshipping">
                Please Check Your Item and Confirm it
              </p>
            </div>
          </div>
          <br />
          <div className="order">
            <div className="orderorder">
              <div className="orderheading">
                <div className="item-name-head">Item Name</div>
                <div className="quantity-head">Quantity</div>
                <div className="item-price-head">Price</div>
              </div>
            </div>
            {/* <table className="order"> */}
            {carts &&
              carts.map((cart) => (
                <div className="orderdeets">
                  <div className="item-name">{cart.item.name}</div>
                  <div className="quantity">{cart.quantity}</div>
                  <div className="item-price">${cart.item.price}</div>
                </div>
              ))}
            <br />
            <br />
            <div className="finalprice">
              <div className="item-price-head">Total price</div>
              {/* <div className="quantity1">{totalitem}</div> */}
              <div className="item-price-head">${subtotal}</div>
            </div>
            <br />
            <br />
            {/* </table> */}
          </div>
          <div className="forminputs">
            <div className="forminputsinner">
              <label>Full Name</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="name"
                required
                placeholder="Enter Recipient's Name"
                onChange={inputFullname}
              />
              <br />

              <br />
              <label>Phone Number</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="number"
                required
                placeholder="Enter Phone Number"
                onChange={inputPhoneNumber}
              />
              <br />

              <br />
              <label>Street address</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="address"
                required
                placeholder="Enter Street address or P.O. Box"
                onChange={inputAddress}
              />
              <br />

              <br />
              <label>PIN Code</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="code"
                required
                placeholder="Enter PIN Code"
                onChange={inputPin}
              />
              <br />

              <br />
              <label>Apt, suite, unit, etc.</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="house"
                required
                placeholder="Enter Apt, suite, unit, etc."
                onChange={inputHouse}
              />
              <br />

              <br />
              <label>City</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="city"
                required
                placeholder="Enter City"
                onChange={inputCity}
              />
              <br />

              <br />
              <label>State</label>
              <br />
              <input
                className="shipinput"
                type="text"
                id="state"
                required
                placeholder="Enter State"
                onChange={inputState}
              />
              <br />
              <br />
              <a className="submitorder" href="/">
                <button className="submitorderbtn" onClick={orderButton}>
                  SUBMIT
                </button>
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Shipping;
