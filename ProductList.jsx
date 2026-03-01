import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [disabledIds, setDisabledIds] = useState([]);

  const categories = {
    "Foliage Plants": [
      { id: 1, name: "Monstera", price: 15, img: "https://via.placeholder.com/100" },
      { id: 2, name: "Fiddle Leaf Fig", price: 20, img: "https://via.placeholder.com/100" }
    ],
    "Succulents": [
      { id: 3, name: "Aloe Vera", price: 8, img: "https://via.placeholder.com/100" },
      { id: 4, name: "Echeveria", price: 10, img: "https://via.placeholder.com/100" }
    ],
    "Flowering Plants": [
      { id: 5, name: "Peace Lily", price: 12, img: "https://via.placeholder.com/100" },
      { id: 6, name: "Orchid", price: 25, img: "https://via.placeholder.com/100" }
    ]
  };

  const handleAdd = (product) => {
    dispatch(addItem(product));
    setDisabledIds([...disabledIds, product.id]);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> | 
        <span>Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
      </nav>

      {Object.entries(categories).map(([cat, plants]) => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {plants.map(p => (
              <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <img src={p.img} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <button
                  disabled={disabledIds.includes(p.id)}
                  onClick={() => handleAdd(p)}
                >
                  {disabledIds.includes(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}