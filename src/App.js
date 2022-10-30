import React from "react";
// Components:
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Cards />
        <Menu />
        <Category />
      </div>
    </div>
  );
};

export default App;
