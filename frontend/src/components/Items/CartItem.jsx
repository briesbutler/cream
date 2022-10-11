import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import "../../assets/style.css";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

const CartItem = ({ cart, item, quantity, cartId }) => {
  console.log("cart", cart);
  let itemId = cart.item.id;
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularItem, setParticularItem] = useState(null);

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  // const clickPlusCart = () => {
  //   dispatch(increaseCart(cartId));
  // };
  // const clickMinusCart = () => {
  //   dispatch(decreaseCart(cartId));
  // };
  useEffect(() => {
    if (carts.length > 0) {
      for (let c = 0; c < carts.length; c++) {
        if (itemId === carts[c].item_id) {
          setParticularItem(carts[c]);
        }
      }
    }
  }, [subtotal]);

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

  useEffect(() => {
    console.log(cart.image);
    console.log(cart);
    console.log(carts);
  }, []);

  return (
    <div className="cart_image_name_outer">
      <div className="image_name">
        {item.image && (
          <a href={item.image} target="_blank" rel="noopener noreferrer">
            <img className="item-image" src={item.image} alt="thumbnail" />
          </a>
        )}
        <div className="price_button">
          <h4 className="cart_item_name">{item.name}</h4>
          <p className="price">${item.price}</p>
        </div>
      </div>
      <div className="name_price">
        {/* {subtotal > 0 && particularItem ? ( */}
        {/* // && particularQuantity > 0 ? ( */}
        <div className="add-button number">
          <span className="minus" onClick={clickMinusCart}>
            －
          </span>
          <span className="count">{quantity}</span>
          <span className="plus" onClick={clickPlusCart}>
            +
          </span>
        </div>
        {/* ) : ( */}
        {/* <div className="btn add-button" onClick={clickAddCart}> */}
        {/* Add + */}
        {/* </div> */}
        {/* )} */}
      </div>
      {/* 
        <button className="add-button">Add +</button>
      */}
    </div>
    //         </li>
  );
};

export default CartItem;

//     <>
//       <div className="cart-row">
//         <img
//           // src={"https://res.cloudinary.com/www-techis-io/" + cart.image}
//           src={cart.image}
//           className="cart-item-image"
//           alt=""
//         />
//         <div className="cart-info">
//           <div className="cart-name">{cart.name}</div>
//           <div className="cart-add">
//             <div className="cart-prize">$ {cart.price}</div>
//             <div className="cart-number">
//               <span className="cart-minus" onClick={clickMinusCart}>
//                 －
//               </span>
//               <span className="cart-count">{quantity}</span>
//               <span className="cart-plus" onClick={clickPlusCart}>
//                 +
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartItem;
