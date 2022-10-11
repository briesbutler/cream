import React, { useEffect, useState } from "react";
import CartItem from "../components/Items/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { getItems } from "../reducks/items/selectors";
import Navbar from "../components/Navbar";
import IceCreamHeader from "../assets/img/ice-cream-header.png";

const Cart = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
  }, []);

  return (
    <div className="cartpage">
      <Navbar />
      <img className="header_img" src={IceCreamHeader} alt="yummy icecream" />
      <ul className="cart-main">
        <li>
          <div className="cart-row">
            <div className="cart-info">
              {
                (carts,
                items &&
                  carts.map((cart) => (
                    <CartItem
                      cart={cart}
                      item={cart.item}
                      cartId={cart.id}
                      key={cart.item.id}
                      quantity={cart.quantity}
                    />
                  )))
              }
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
