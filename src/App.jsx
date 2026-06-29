import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import FoodList from "./components/FoodList/FoodList";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Hero />

      <Category />

      <FoodList addToCart={addToCart} />
    </>
  );
}

export default App;