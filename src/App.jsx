import React from "react";

import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import FAQ from "./FAQ";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <ProductDetails/>
      <FAQ/>
    </div>
  );
};

export default App;