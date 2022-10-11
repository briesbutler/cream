import React, { useCallback, useEffect, useRef, useState } from "react";
import { getItems } from "../reducks/items/selectors";
import { fetchItems } from "../reducks/items/operations";
import Navbar from "../components/Navbar";
import LoginForm from "../components/SignIn";
import SignUpForm from "../components/SignUp";
import { getUser } from "../reducks/users/selectors";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../assets/img/loading.gif";
import IceCreamHeader from "../assets/img/ice-cream-header.png";
import Item from "../components/Items/Item";
import { fetchCarts } from "../reducks/carts/operations";
import User from "../components/User";

const Home = () => {
  const dispatch = useDispatch();
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  // const id = key.slice(8, -2);
  // const Header = `{"Authorization": "Token ${id}"}`;
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  let [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const user = getUser(selector);

  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const [isShowSignUp, setIsShowSignUp] = useState(false);
  const handleSignUpClick = () => {
    setIsShowSignUp((isShowSignUp) => !isShowSignUp);
  };

  useEffect(() => {
    dispatch(fetchItems({ page }));
    if (key) {
      dispatch(fetchCarts());
      console.log(items);
    }
    // eslint-disable-next-line
  }, []);

  // Infinite Scroll Pagination Flow
  const observer = useRef();

  // Reference to a very last product element
  const lastItemElement = useCallback(
    (node) => {
      if (isLoading) return;
      // Disconnect reference from previous element, so that new last element is hook up correctly
      if (observer.current) {
        observer.current.disconnect();
      }

      // Observe changes in the intersection of target element
      observer.current = new IntersectionObserver(async (entries) => {
        // That means that we are on the page somewhere, In our case last element of the page
        if (entries[0].isIntersecting && items.next) {
          // Proceed fetch new page
          setIsLoading(true);
          setPage(++page);
          await dispatch(fetchItems({ page }));
          setIsLoading(false);
        }
      });

      // Reconnect back with the new last post element
      if (node) {
        observer.current.observe(node);
      }
    },
    // eslint-disable-next-line
    [items.next]
  );

  return (
    <section className="outercontent">
      <Navbar handleLoginClick={handleLoginClick} />
      <LoginForm
        isShowLogin={isShowLogin}
        handleSignUpClick={handleSignUpClick}
        handleLoginClick={handleLoginClick}
      />
      <SignUpForm
        isShowSignUp={isShowSignUp}
        handleLoginClick={handleLoginClick}
        handleSignUpClick={handleSignUpClick}
      />
      <div className="content">
        {/* <Navbar */}
        {/* //   handleLoginClick={handleLoginClick} */}
        {/* //   user={rootReducer.user} */}
        {/* /> */}
        {/* <LoginForm */}
        {/* isShowLogin={isShowLogin} */}
        {/* handleSignUpClick={handleSignUpClick} */}
        {/* handleLoginClick={handleLoginClick} */}
        {/* /> */}
        {/* <SignUpForm */}
        {/* isShowSignUp={isShowSignUp} */}
        {/* handleLoginClick={handleLoginClick} */}
        {/* handleSignUpClick={handleSignUpClick} */}
        {/* /> */}

        <section className="item">
          <img
            className="header_img"
            src={IceCreamHeader}
            alt="yummy icecream"
          />
          {/* <h1> */}
          {/* {user}hi{Header} */}
          {/* </h1> */}
          {items.results.length > 0 ? (
            <ul className="listmargin">
              {items.results.map((item, index) => {
                return (
                  <Item
                    ref={
                      index === items.results.length - 1
                        ? lastItemElement
                        : null
                    }
                    key={item.id}
                    item={item}
                    handleLoginClick={handleLoginClick}
                  />
                );
              })}
            </ul>
          ) : (
            <div className="no-item">
              <p>No items here yet...</p>
            </div>
          )}

          {isLoading && (
            <div className="loading">
              <img src={Loading} className="" alt="" />
            </div>
          )}
        </section>
        {/* <Footer /> */}
      </div>
    </section>
  );
};

export default Home;
