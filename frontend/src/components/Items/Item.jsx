import React, { useEffect, useState } from "react";
import "../../assets/img/ice-cream-header.png";
import "../../assets/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";
import { redirect } from "react-router";
import { getUser } from "../../reducks/users/selectors";
import { fetchUserFromLocalStorage } from "../../reducks/users/operations";
import { getItems } from "../../reducks/items/selectors";

const Item = React.forwardRef((props, ref) => {
  const { item } = props;
  let itemId = item.id;
  const dispatch = useDispatch();
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  // const id = key.slice(8, -2);
  // const Header = `{'Authorization': 'Token ${id}'}`;
  const [checkUser, setCheckUser] = useState(false);
  const selector = useSelector((state) => state);
  const carts = getCarts(selector);
  // const itemResults = getItems(selector);
  // const itemList = itemResults.results;
  const subtotal = getSubtotal(selector);
  const [particularQuantity, setParticularQuantity] = useState(null);
  const [particularItem, setParticularItem] = useState(null);
  // const { user } = function QWERTY() {
  //   dispatch(getUser(Header));
  //   // ///// console.log({ user });
  // };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  // useEffect(() => {
  //   if (particularItem) {
  //     // let partItemQuantity = particularItem.quantity;
  //     setParticularQuantity(particularItem.quantity);
  //     console.log("particularQ", particularQuantity);
  //     console.log("particularitemdotQ", particularItem.quantity);
  //   }
  // }, [particularItem]);

  const handleClick = () => {};

  // function filterArray(array, filter) {
  //   for (var i = 0; i < array.length; i++) {
  //     for (var j = 0; j < filter.length; j++) {
  //       if (array[i].id === filter[j].item_id) {
  //         // ///// console.log("filtercheck1", array[i], filter[j]);
  //         // ///// console.log("filtercheck2", array[i], filter[j]);
  //         setParticularItem(array[i]);
  //         // return array[i];
  //         return particularItem;
  //       }
  //     }
  //   }
  //   // setParticularItem(array[i]);
  //   // // ///// console.log("Item - partitem", particularItem);
  // }

  useEffect(() => {
    if (carts.length > 0) {
      // for (let b = 0; b < itemList.length; b++) {
      for (let c = 0; c < carts.length; c++) {
        // ///// console.log("Item - item", item);
        // ///// console.log("Item - carts", carts);
        if (itemId === carts[c].item_id) {
          // ///// console.log("Item - itemId", itemId);
          // ///// console.log("Item - cartid", carts[c].item_id);
          // setParticularItem(itemId);
          setParticularItem(carts[c]);
          // let partItemQuantity = particularItem.quantity;
        }
        // let matchedItem = carts.filter((cart) => cart[a].item_id == itemId);
        // let matchedItem = carts.filter((carts) => carts[a].item_id == itemId);
        // const matchedItem = filterArray(itemList, carts);
        // // ///// console.log("Item - cartitem_id", carts[a].item_id);
        // // ///// console.log("Item - cartitemId", itemId);
        // // ///// console.log("Item - matchitem", matchedItem);
        // setParticularItem(matchedItem.filter(filterByID));
        // ///// console.log("Item - partitem", particularItem);
        // if (subtotal != 0) {
        // // ///// console.log("carts");
        // // ///// console.log([carts]);
        // function filterByID(item) {
        // if (item.item_id === itemId) {
        // // ///// console.log("Item - item", item);
        // return item;
        // }
      }

      // const matchedItem = [carts].filter(filterByID)[0];
      // let matchedCarts = [carts].filter((cart) => cart.item_id == itemId);
      // // ///// console.log("matchedCarts");
      // // ///// console.log(matchedCarts);
      // if (matchedCarts.length > 0) {
      // setParticularCart(matchedCarts.pop());
      // // ///// console.log("particularCart");
      // // ///// console.log(particularCart);
      // } else {
      // setParticularCart(null);
      // }
    }
    // if (particularItem) {
    //   // let partItemQuantity = particularItem.quantity;
    //   setParticularQuantity(particularItem.quantity);
    //   console.log("particularQ", particularQuantity);
    //   console.log("particularitemdotQ", particularItem.quantity);
    // }
  }, [subtotal]);

  const clickAddCart = () => {
    if (key) {
      // ///// console.log("item-key-addcart1");
      const id = key.slice(8, -2);
      const header = `{'Authorization': 'Token ${id}'}`;
      // dispatch(addCart(item, user));
      dispatch(addCart(item, id, header));
      // ///// console.log("item-key-addcart2");
    } else {
      // ///// console.log("item-key-addcart3");
      // dispatch({ handleClick });
      const { handleLoginClick } = props;
      handleLoginClick();
    }
  };

  // const clickAddUser = () => {
  //   if (key) {
  //     // dispatch(addCart(item, user));
  //     const user = () => {
  //       dispatch(getUser(Header));
  //     };
  //   } else {
  //     dispatch({ handleClick });
  //   }
  // };

  const clickPlusCart = () => {
    dispatch(increaseCart(particularItem.id));
  };
  const clickMinusCart = () => {
    if (particularItem.quantity > 1) {
      dispatch(decreaseCart(particularItem.id));
    } else {
      dispatch(decreaseCart(particularItem.id));
      setParticularItem(null);
    }
  };

  return (
    <div className="image_name_outer">
      <div className="image_name">
        {item.image && (
          <a href={item.image} target="_blank" rel="noopener noreferrer">
            <img className="item-image" src={item.image} alt="thumbnail" />
          </a>
        )}
        <div className="price_button">
          <h4 className="name">{item.name}</h4>
          <p className="price">${item.price}</p>
        </div>
      </div>
      <div className="name_price">
        {subtotal > 0 && particularItem ? (
          // && particularQuantity > 0 ? (
          <div className="add-button number">
            <span className="minus buttonchangesign" onClick={clickMinusCart}>
              －
            </span>
            <span className="count buttonchangesign">
              {particularItem.quantity}
            </span>
            <span className="plus buttonchangesign" onClick={clickPlusCart}>
              +
            </span>
          </div>
        ) : (
          <div className="btn add-button" onClick={clickAddCart}>
            <p className="addplus">Add +</p>
          </div>
        )}
      </div>
      {/* 
        <button className="add-button">Add +</button>
      */}
    </div>
    //         </li>
  );
});

export default Item;
