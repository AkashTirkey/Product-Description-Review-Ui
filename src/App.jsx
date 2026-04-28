import React from "react";

import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import FAQ from "./FAQ";
import Footer from "./Footer";
import TopBanner from "./TopBanner";
import ReviewSection from "./ReviewSection";

const App = () => {
  return (
    <div>
      <TopBanner/>
      <Navbar/>
      <Product/>
      <ProductDetails/>
      <FAQ/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
};

export default App;