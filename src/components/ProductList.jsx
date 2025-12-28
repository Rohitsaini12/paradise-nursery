import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 300, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Money Plant", price: 250, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 150, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulsi", price: 120, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Cactus", price: 180, category: "Succulents", img: "https://via.placeholder.com/100" }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="products">
        {plants.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => dispatch(addItem(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
