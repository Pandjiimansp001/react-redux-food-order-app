import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, quantity, price, total } = props.item;

  const addItemhandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
      })
    );
  };

  const removeItemhandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <>
      <div className="item__order">
        <span>
          {name} (x{quantity}) (Rp. {total.toFixed(3)})
        </span>
        <div className="action__form">
          <span onClick={addItemhandler}>+</span>
          <span onClick={removeItemhandler}>-</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
