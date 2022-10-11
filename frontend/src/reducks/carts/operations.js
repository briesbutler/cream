import API from "../../API";
import {
  addCartAction,
  fetchCartItemsAction,
  increaseCartAction,
  decreaseCartAction,
} from "./actions";
// import { push } from "connected-react-router";

const api = new API();
const CARTS_KEY = "CARTS_KEY";

function filterArray(array, filter) {
  // var myArrayFiltered = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < filter.length; j++) {
      if (
        array[i].id === filter[j].item_id
        //  &&
        // array[i].projectid === filter[j].projectid
      ) {
        // console.log("filtercheck1", array[i], filter[j]);
        filter[j]["item"] = array[i];
        // console.log("filtercheck2", array[i], filter[j]);
        // array[i].push(filter[j]);
        // console.log("filtercheck3", array[i], filter[j]);
        // addedCart["item"] = item;
        // addedCart.push(item);
        // myArrayFiltered.push(array[i]);
      }
    }
  }
  return filter;
  // return addedCart;
  // return myArrayFiltered;
}
// myArrayFiltered = filterArray(myArray, myFilter);
// console.log(myArrayFiltered);

// function idMatch(item, cart) {
// return item.id === cart.item_id;
// }

// function filterSubtotal(array, filter) {
//   // var myArrayFiltered = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < filter.length; j++) {
//       let subtotal = filter[j].item.price * filter[j].quantity;
//       return subtotal;
//     }
//   }
// }

export const fetchCarts = () => {
  return async (dispatch, getState) => {
    return api
      .getCarts()
      .then((carts) => {
        if (carts.count != 0) {
          return api.getItems().then((items) => {
            // dispatch(fetchItemsAction(items));
            // console.log("CARTS - item", items);
            let itemsResultsArray = items.results;
            // console.log("CARTS - itemresults", itemsResultsArray);
            let cartsResultsFilter = carts.results;
            // console.log("CARTS - cartsresults", cartsResultsFilter);
            const matchedItem = filterArray(
              itemsResultsArray,
              cartsResultsFilter
            );
            // console.log("find", matchedItem);
            // const itemPushed = matchedItem.map();
            // itemsResults.filter(idMatch(cartsResults)));
            const subtotal = calculateSubtotal(matchedItem);
            dispatch(fetchCartItemsAction(matchedItem, subtotal));
            // const results = carts.results;
            // for (let i = 0; i < results.length; i++) {
            // results.push(carts.results[i]);
            // }
            // const logArrayElements = (index) => {
            // console.log("fetch - logArray", index);
            // };
            // results.forEach(logArrayElements);
            // console.log("fetch - results");
            // console.log(results);
            // console.log("fetch - copyResults");
            // console.log(copyResults);
            //   return api.getItems().then((items) => {
            //     function filterByID(item) {
            //       if (item.id === id) {
            //         return item;
            //       }
            //     }
            //     const item = items.results.filter(filterByID);
            //     const cart = carts.results;
            //     cart["item"] = item;
            // console.log("fetch - cart", carts);
            //     const subtotal = calculateUpdateSubtotal(cart);
            //     console.log("fetch - subtotal");
            //     console.log(subtotal);
            //     dispatch(fetchCartItemsAction(cart, subtotal));
            //   });
          });
        }
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
  // carts.results[0].push(item);
  // cart.push(item);
  // let itemZ = items.results[0];
  // let itemI = items.results[1];
  // let itemII = items.results[2];
  // let itemIII = items.results[3];
  // let itemIdList = [itemZ.id, itemI.id, itemII.id, itemIII.id];
  // console.log(itemIdList);
  // if (itemIdListid) console.log("true Z");
  // let prevCarts = [carts.pop()];
  // let id = prevCarts.item_id;
  // let prevCarts = getState().carts.results;
  // prevCarts.push((addedCart["item"] = item));
  // let item = getState().item.results;
  // console.log("prevCarts");
  // console.log(prevCarts);
  // console.log("id");
  // console.log(id);
};

// function filterArray(array, filter) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < filter.length; j++) {
//       if (array[i].id === filter[j].item_id) {
//         console.log("filtercheck1", array[i], filter[j]);
//         filter[j]["item"] = array[i];
//         console.log("filtercheck2", array[i], filter[j]);
//       }
//     }
//   }
//   return filter;
// }

export const addCart = (item, id) => {
  return async (dispatch, getState) => {
    return api
      .addCarts(item.id, id)
      .then((addedCart) => {
        // console.log("CARTS - item", item);
        // let itemsResultsArray = item;
        let cartList = getState().carts.results;
        console.log("addCart - cartList", cartList);
        // let cartsResultsFilter = itCart.results;
        // for (var j = 0; j < cartsResultsFilter.length; j++) {
        //   if (itemsResultsArray.id === cartsResultsFilter[j].item_id) {
        //     console.log("filtercheck1", itemsResultsArray, cartsResultsFilter[j]);
        //     filter[j]["item"] = array[i];
        //     console.log("filtercheck2", array[i], filter[j]);
        //   }
        // }
        addedCart["item"] = item;
        console.log("addCart - addedCart", addedCart);
        cartList.push(addedCart);
        // itCart.push(addedCart);
        // let newCart = [];
        // newCart = addedCart
        // prevCarts = itCart.pop();
        // console.log("addCart - prevCarts");
        // console.log(prevCarts);
        // console.log("itCart");
        // console.log(itCart);
        // const subtotal = calculateSubtotal(prevCarts);
        const subtotal = calculateSubtotal(cartList);
        dispatch(addCartAction(cartList, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to add cart");
        console.log(error);
      });
  };
};
//////////////MINE
// export const addCart = (item, id) => {
//   return async (dispatch, getState) => {
//     return api
//       .addCarts(item.id, id)
//       .then((addedCart) => {
//         let prevCarts = getState().carts.results;
//         prevCarts.push((addedCart["item"] = item));
//         // prevCarts.push(addedCart);
//         const subtotal = calculateSubtotal(addedCart);
//         dispatch(addCartAction(prevCarts, subtotal));
//         console.log("prevCarts");
//         console.log(prevCarts);
//         console.log("subtotal");
//         console.log(subtotal);
//         console.log("addedCart");
//         console.log(addedCart);
//       })
//       .catch((error) => {
//         alert("Failed to connect API to add cart");
//         console.log(error);
//       });
//   };
// };

export const increaseCart = (id) => {
  return async (dispatch, getState) => {
    // console.log("incCart - id param", id);

    let cartList = getState().carts.results;
    // console.log("incCart - cartList", cartList);

    let matchedCarts = cartList.filter((cart) => cart.id === id);
    // console.log("incCart - matchedcarts", matchedCarts);

    let newQuantity = matchedCarts[0].quantity + 1;
    // matchedCarts[0].quantity++;
    // console.log("incCart - newQuantity", newQuantity);

    let item_id = matchedCarts[0].item_id;
    let user_id = matchedCarts[0].user_id;
    return (
      api
        // .updateCarts(id, nextSelectedCount)
        .updateCarts(id, newQuantity, item_id, user_id)
        .then((updatedCart) => {
          // console.log("incCart - cartList", cartList);
          // console.log("incCart - updcarts", updatedCart);
          // console.log("incCart - matchedcarts", matchedCarts);
          // cartList.filter((cart) => cart.id === id).quantity = newQuantity;
          matchedCarts[0].quantity = newQuantity;
          // const subtotal = calculateUpdateSubtotal(prevCarts);
          ///////CHECK
          // cartList = cartList.pop();
          // cartList.quantity = updatedCart.quantity;
          ///////CHECK
          // prevCarts.push(updatedCart);
          // prevCarts.quantity = updatedCart.quantity;
          // cartList.subtotal = subtotal;
          // console.log("incCart - cartList", cartList);
          const subtotal = calculateSubtotal(cartList);
          dispatch(increaseCartAction(cartList, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to increase cart's quantity");
          console.log(error);
        })
    );
  };
};

export const deleteCart = (id) => {
  return async (dispatch, getState) => {
    let cartList = getState().carts.results;
    return api
      .deleteCarts(id)
      .then((deletedCarts) => {
        console.log("delCart - deletedCarts", deletedCarts);
        // matchedCarts[0].quantity = newQuantity;
        // dispatch(fetchCarts());
        cartList = cartList.filter((cart) => cart.id !== id);
        const subtotal = calculateSubtotal(cartList);
        dispatch(decreaseCartAction(cartList, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to delete cart's quantity");
        console.log(error);
      });
  };
};

export const decreaseCart = (id) => {
  return async (dispatch, getState) => {
    let cartList = getState().carts.results;
    let matchedCarts = cartList.filter((cart) => cart.id === id);
    let newQuantity = matchedCarts[0].quantity - 1;
    let item_id = matchedCarts[0].item_id;
    let user_id = matchedCarts[0].user_id;
    if (newQuantity >= 1) {
      // if quantity is more than 0, update
      return api
        .updateCarts(id, newQuantity, item_id, user_id)
        .then((updatedCart) => {
          matchedCarts[0].quantity = newQuantity;
          // cartList = cartList.filter((cart) => cart.id !== id);
          // cartList.push(updatedCart);
          const subtotal = calculateSubtotal(cartList);
          dispatch(decreaseCartAction(cartList, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    } else {
      // if quantity is 0, delete
      return api
        .deleteCarts(id)
        .then((deletedCarts) => {
          console.log("delCart - deletedCarts", deletedCarts);
          // matchedCarts[0].quantity = newQuantity;
          // dispatch(fetchCarts());
          cartList = cartList.filter((cart) => cart.id !== id);
          const subtotal = calculateSubtotal(cartList);
          dispatch(decreaseCartAction(cartList, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    }
  };
};

// function filterArray(array, filter) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < filter.length; j++) {
//       if (array[i].id === filter[j].item_id) {
//         console.log("filtercheck1", array[i], filter[j]);
//         filter[j]["item"] = array[i];
//         console.log("filtercheck2", array[i], filter[j]);
//       }
//     }
//   }
//   return filter;
// }

const calculateSubtotal = (carts) => {
  let subtotal = 0;
  // let text = "";
  console.log("subcarts", carts);
  // carts.forEach((cart) => {
  for (let a = 0; a < carts.length; a++) {
    // for (let key in cart) {
    // if (i) {
    // let cartOne = carts[0];
    // let cartTwo = carts[1];
    // console.log("subcartone", cartOne);
    // console.log("subcarttwo", cartTwo);
    // let text = carts[i];
    // console.log("subtext", text);
    // text += carts[i];
    // text += cart[i];
    console.log("subcartsss", carts[a]);
    // console.log("subcartsss", `${key}: ${cart[key]}`);
    // console.log("subtext", text);
    subtotal += Number(carts[a].item.price * carts[a].quantity);
    // subtotal += Number(cart[i].item.price * cart[i].quantity);
    // subtotal += Number(cart[key].item.price * cart[key].quantity);
  }
  // });
  console.log("subsubtotal", subtotal);
  return subtotal;
  // if (carts.count > 0) {
  // console.log("carts.length");
  // console.log(carts.count);
  // let itCart = [];
  // itCart = carts.pop();
  // console.log("itcarts");
  // console.log(itCart);
  // console.log("itcartsit");
  // console.log(itCart.item);
  // console.log("itcartspr");
  // console.log(itCart.item.price);
  // console.log("itcartsqu");
  // console.log(itCart.quantity);
  // subtotal = carts[i].item.price * carts[i].quantity;
};

const calculateUpdateSubtotal = (carts) => {
  // let subtotal = 0;
  console.log("subcarts", carts);
  // for (let key in carts) {
  // subtotal += Number(carts.item.price) * carts.quantity;
  let subtotal = carts.item.price * carts.quantity;
  // console.log("subsub", subtotal);
  console.log("subcarts", carts);
  console.log("subsub", subtotal);
  // }
  return subtotal;
};
