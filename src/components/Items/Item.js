import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/store/cartSlice";

const Item = (props) => {
  const dispatch = useDispatch();

  const { id, name, price } = props;

  const addItemToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
      })
    );
  };

  return (
    <>
      <div className="cart__items" onClick={addItemToCart}>
        <span>
          {name} (Rp. {price.toFixed(3)})
        </span>
        <span>+</span>
      </div>
    </>
  );
};

export default Item;
