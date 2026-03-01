import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleContinue = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <div>
      {!showProductList && !showCart && (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      )}

      {showProductList && !showCart && (
        <ProductList />
      )}

      {showCart && (
        <CartItem goBack={handleContinue} />
      )}
    </div>
  );
}