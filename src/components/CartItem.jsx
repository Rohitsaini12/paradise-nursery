import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} width="60" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartItem;
