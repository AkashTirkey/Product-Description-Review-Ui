import React from "react";

import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import FAQ from "./FAQ";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Product/>
      <ProductDetails/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default App;