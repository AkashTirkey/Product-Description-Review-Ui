import React, { useState } from 'react';
import style from "./style/FAQ.module.css"

const FAQ = () => {
    const[activeIndex, setActiveIndex] = useState(null);
    const faqs = [
    { question: "What is this product?", answer: "It is a premium quality item designed for daily use." },
    { question: "Is it safe to use?", answer: "Yes, it is completely safe and tested." },
    { question: "What is the shelf life?", answer: "It lasts up to 6 months." },
    { question: "Is it vegan?", answer: "Yes, 100% vegan." },
    { question: "Does it contain preservatives?", answer: "No artificial preservatives added." },
    { question: "How to store it?", answer: "Store in a cool and dry place." },
    { question: "Is it gluten-free?", answer: "Yes, completely gluten-free." },
    { question: "What are the ingredients?", answer: "Natural and organic ingredients." },
    { question: "Can kids consume it?", answer: "Yes, safe for all age groups." },
    { question: "Is it keto-friendly?", answer: "Yes, suitable for keto diets." },
    { question: "How to use it?", answer: "Use it as per your daily needs." },
    { question: "Is COD available?", answer: "Yes, cash on delivery is available." },
    { question: "What is the return policy?", answer: "7-day return policy available." }
  ];

  const toggleFAQ = (index) =>{
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className={style.container}>
        <h2 className={style.heading}>Frequently Asked Questions</h2>

        {faqs.map((faq,index) =>(
            <div key={index} className={style.faqItem}>
                {/* questions */}
                <div className={style.question} onClick={()=> toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                </div>

                {/* answer */}
                {activeIndex === index && (
                    <div className={style.answer}>{faq.answer}</div>
                )}
            </div>
        ))}
    </div>
  )
}

export default FAQ