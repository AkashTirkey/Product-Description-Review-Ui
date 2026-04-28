import React, { useState } from "react";
import style from "./style/Product.module.css"

const Product = () =>{

    // states
    const images = [
        "https://m.media-amazon.com/images/I/81ITrWTo7PL._AC_UF894,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/S/aplus-media/sc/832b7d50-f3f8-4526-bcc1-03f0d38475c5.__CR0,0,5000,5000_PT0_SX300_V1___.jpg",
        "https://m.media-amazon.com/images/I/71HZmD56V0S.jpg"
    ];
    const[selectedImage, setSelectedImage] = useState(images[0]);
    const[selectedSize, setSelectedSize] = useState(null);
    const[quantity, setQuantity] = useState(1);

    const sizes = ["300g" , "500g", "1kg"];

   return (
    <div className={style.container}>

      {/* LEFT */}
      <div className={style.imagesSection}>
        
        {/* Main Image */}
        <div className={style.imageWrapper}>
          <img src={selectedImage} className={style.mainImage} />
        </div>

        {/* Thumbnails */}
        <div className={style.thumbnailContainer}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`${style.thumbnail} ${
                selectedImage === img ? style.active : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

      </div>

      {/* Right part */}
       <div className={style.detailsSection}>

        <h2 className={style.title}>Premium Cotton T-Shirt</h2>

        <p className={style.price}>₹999</p>

        <p className={style.sold}>1200 units sold</p>

        {/* Sizes */}
        <div className={style.sizeContainer}>
          {sizes.map((size) => (
            <span
              key={size}
              className={`${style.size} ${
                selectedSize === size ? style.activeSize : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>

        {/* Quantity */}
        <div className={style.quantity}>
          <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity(prev => prev + 1)}>
            +
          </button>
        </div>

        {/* Button */}
        <button
          className={style.addToCart}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>

      </div>

    </div>
    )
}

export default Product;