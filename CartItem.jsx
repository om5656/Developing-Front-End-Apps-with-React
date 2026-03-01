import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItem({ goBack }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleChange = (id, qty) => {
    if (qty <= 0) dispatch(removeItem(id));
    else dispatch(updateQuantity({ id, quantity: qty }));
  };

  const total = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <img src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} each</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => handleChange(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleChange(item.id, item.quantity + 1)}>+</button>
            <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}
      <h2>Total Cart Amount: ${total}</h2>
      <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
      <button className="continue-btn" onClick={goBack}>Continue Shopping</button>
    </div>
  );
}