import React, { useState } from "react";
import style from "./style/Product.module.css"

const Product = () =>{

    // states
    const images = [
        "https://m.media-amazon.com/images/I/81ITrWTo7PL._AC_UF894,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/S/aplus-media/sc/832b7d50-f3f8-4526-bcc1-03f0d38475c5.__CR0,0,5000,5000_PT0_SX300_V1___.jpg",
        "https://m.media-amazon.com/images/I/71HZmD56V0S.jpg"
    ];
    const[selectedImage, setSelectedImage] = useState([0]);
    const[selectedSize, setSelectedSize] = useState(null);
    const[quantity, setQuantity] = useState(1);

    const sizes = ["S" , "M", "L"];

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

          <h2 className={style.title}>
          Chocolate Salvation Peanut Butter
          </h2>
      </div>

    </div>
    )
}

export default Product;