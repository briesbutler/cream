import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Shipping from "./containers/Shipping";
import OrderConfirmation from "./containers/Thankyou";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/Thankyou" element={<OrderConfirmation />} />
    </Routes>
  );
};
export default Router;
