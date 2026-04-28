import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./style/Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ReviewSection = () => {
  const [filter, setFilter] = useState("all");

const reviews = [
  {
    name: "Aman",
    rating: 5,
    text: "Absolutely loved this product. The quality is top-notch and it genuinely feels premium. I’ve been using it daily and it has become part of my routine.",
    verified: true
  },
  {
    name: "Riya",
    rating: 4,
    text: "Really good experience overall. The product feels fresh and well-made. Slight improvements in pricing would make it perfect.",
    verified: true
  },
  {
    name: "John",
    rating: 5,
    text: "Exceeded expectations. I wasn’t sure at first but this turned out to be one of the best purchases I’ve made this year.",
    verified: false
  },
  {
    name: "Sara",
    rating: 3,
    text: "It’s okay. Not bad, not great. Works fine for occasional use but I expected slightly better consistency.",
    verified: false
  },
  {
    name: "Mike",
    rating: 4,
    text: "Good product with solid build quality. Packaging was clean and delivery was on time. Overall satisfied.",
    verified: true
  },
  {
    name: "Neha",
    rating: 5,
    text: "One word: amazing. The texture and feel are exactly what I was looking for. Will definitely reorder.",
    verified: true
  },
  {
    name: "Karan",
    rating: 4,
    text: "Very reliable product. Does what it claims without any issues. A bit pricey but worth it for the quality.",
    verified: false
  },
  {
    name: "Priya",
    rating: 5,
    text: "I’ve tried multiple brands but this stands out. Smooth experience and excellent quality overall.",
    verified: true
  },
  {
    name: "Arjun",
    rating: 3,
    text: "Average experience. Nothing special but not disappointing either. Could be improved in terms of taste and consistency.",
    verified: false
  },
  {
    name: "Simran",
    rating: 4,
    text: "Pretty good product. I like the packaging and overall presentation. Feels like a trusted brand.",
    verified: true
  },
  {
    name: "Vikram",
    rating: 5,
    text: "Outstanding quality. You can instantly feel the difference compared to regular products in the market.",
    verified: true
  },
  {
    name: "Anjali",
    rating: 4,
    text: "Good experience. The product is consistent and easy to use. Would recommend it to others.",
    verified: false
  },
  {
    name: "Rahul",
    rating: 5,
    text: "Superb product. Everything from packaging to performance is well thought out and high quality.",
    verified: true
  },
  {
    name: "Meera",
    rating: 3,
    text: "It’s fine for basic use. Nothing extraordinary but gets the job done without issues.",
    verified: false
  },
  {
    name: "Dev",
    rating: 4,
    text: "Solid product overall. Nice balance of quality and usability. Happy with the purchase.",
    verified: true
  }
];

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === filter);

      const getBgColor = (rating) => {
  switch (rating) {
    case 5:
      return "#e8f9f0"; // soft green
    case 4:
      return "#eef4ff"; // soft blue
    case 3:
      return "#fff6e5"; // soft yellow
    default:
      return "#ffffff";
  }
};

  return (
    <div className={style.container}>

      {/* FILTER TABS */}
      <div className={style.tabs}>
        {["all", 5, 4, 3].map((f) => (
          <div
            key={f}
            className={`${style.tab} ${filter === f ? style.active : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All" : `${f}★ Reviews`}
          </div>
        ))}
      </div>

      {/* REVIEW FEED */}
<div className={style.swiperWrapper}>

  {/* ALL → SWIPER */}
  {filter === "all" ? (

  <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 800,
    disableOnInteraction: false
}}
    speed={500}
  spaceBetween={20}
  slidesPerView={2}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
      {reviews.map((r, i) => (
        <SwiperSlide key={i}>
          <div className={style.card} style={{ background: getBgColor(r.rating) }}>
            <div className={style.top}>
              <strong>{r.name}</strong>
              {r.verified && (
                <span className={style.badge}>✔ Verified</span>
              )}
            </div>

            <div>{"⭐".repeat(r.rating)}</div>
            <p>{r.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  ) : (

    /* FILTERED → GRID + ANIMATION */
    <AnimatePresence mode="wait">

      {filteredReviews.map((r, i) => (
        <motion.div
          key={r.name + i}
          className={style.card}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          style={{ background: getBgColor(r.rating) }}
          layout
        >
          <div className={style.top}>
            <strong>{r.name}</strong>
            {r.verified && (
              <span className={style.badge}>✔ Verified</span>
            )}
          </div>

          <div>{"⭐".repeat(r.rating)}</div>
          <p>{r.text}</p>
        </motion.div>
      ))}

    </AnimatePresence>

  )}

</div>
    </div>
  );
};

export default ReviewSection;