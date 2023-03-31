import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  const totalShopping = () => {
    let totalOrder = 0;
    cartItems.map(
      (item) => (totalOrder = totalOrder + item.quantity * item.price)
    );
    return totalOrder;
  };

  const backHandler = () => {
    navigate("/");
  };

  const orderhandler = () => {
    alert("Thanks for order! we will process it, please wait...");
    window.location.reload();
  };

  return (
    <>
      <Header />
      <div className="form__container">
        <div className="form__order">
          <span>Your Shopping Cart</span>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.totalPrice,
              }}
            />
          ))}
        </div>
        <div className="total__shopping">
          <span>Total : Rp. {totalShopping().toFixed(3)}</span>
        </div>
        <div className="submit__btn">
          <button onClick={backHandler}>Back</button>
          <button onClick={orderhandler}>Order Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
