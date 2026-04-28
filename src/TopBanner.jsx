import React from "react";
import style from "./style/Banner.module.css";

const TopBanner = () => {
  return (
    <div className={style.banner}>
      <p>
        🎉 Get 5% off by using coupon: <strong>Healthy5</strong>
      </p>
    </div>
  );
};

export default TopBanner;