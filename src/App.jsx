import React from "react";

import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <ProductDetails/>
    </div>
  );
};

export default App;