import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Monstera", price: 30, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 25, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Aloe Vera", price: 20, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Cactus", price: 15, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Peace Lily", price: 35, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Orchid", price: 40, category: "Flowering", image: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Plants</Link> | 
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>

      <h2>Plant Collection</h2>

      {plants.map(plant => {
        const inCart = cartItems.find(item => item.id === plant.id);

        return (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              disabled={inCart}
            >
              {inCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;