import React from "react";
import Item from "./Item";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Nasi Goreng",
    price: 15,
  },
  {
    id: "2",
    name: "Nasi Omelet",
    price: 8,
  },
  {
    id: "3",
    name: "Mie Goreng",
    price: 11,
  },
  {
    id: "4",
    name: "Ayam Geprek",
    price: 12,
  },
];

const Items = () => {
  return (
    <>
      <div className="cart__container">
        <div className="cart__card">
          {DUMMY_DATA.map((i) => (
            <Item key={i.id} id={i.id} name={i.name} price={i.price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
