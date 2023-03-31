import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.totalCart);

  const submitOrder = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="header__container">
        <div className="header">
          <span className="header__title">FoodOrder</span>
          <div className="cart__badge" onClick={submitOrder}>
            <span>Your Cart</span>
            <span>{cartQuantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
