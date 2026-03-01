import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={() => setShowProductList(true)}>Get Started</button>
    </div>
  );
}

export default App;