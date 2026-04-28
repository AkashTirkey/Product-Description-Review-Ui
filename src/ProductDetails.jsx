import React ,{useState} from 'react'
import style from "./style/ProdDetails.module.css";

const ProductDetails = () => {
    const[activeState, setActiveState] = useState(null);
    const sections = [
        {
            title:"Desciption",
            content:"Are you even living to the fullest if you haven’t tried our lipsmackin’ Chocolate Salvation peanut butter? Dig into this treat when you don’t want to cheat on your diet. A perfect blend of delightful chocolate and rich peanuts. A relationship truly made in heaven. A perfect jar of sinful indulgence to not let you give up on your healthy diet goals, while also gratifying your never-ending desire of Dark Chocolate cravings"
        },
        {
            title:"Additional Information",
            content:"size-300g , 500g, 1KG",
        },
        {
            title:"Features",
            content:"Peanut Butter made from premium quality Peanuts. Made with Dark Chocolate sinful temptation. Maska Peanut Butter – ZERO Cholesterol, NO Trans Fat, NO Hydrogenated Oils, Gluten-free. NO Added Artificial Colours or Preservatives, thus making it diet-friendly and keto-friendly."
        },
        {
            title:"Ingredients",
            content:"Roasted Peanuts Dark Chocolate Brown Sugar Pink Salt"
        }
    ];

    const toggleSection = (index) =>{
        setActiveState(activeState === index ? null :  index);
    }
  return (
    <div className={style.Container}>
{/* left part */}
<div className={style.left}>
    {sections.map((section,index) =>(
        <div key={index} className={style.section}>

            {/* header */}
            <div className={style.header} onClick={() => toggleSection(index)}>
            <span>{section.title}</span>
            <span>{activeState === index ? "-" : "+"}</span>
            </div>

            {/*Content  */}
            {activeState === index && (
                <div className={style.content}>{section.content}</div>
            )}
        </div>
    ))}
</div>

{/* right side image */}
    <div className={style.right}>
    <img src='https://www.maskabutters.in/cdn/shop/files/4_4.jpg?v=1739429714&width=1000' alt='Product Detail' className={style.image}/>
    </div>
    </div>
  )
}

export default ProductDetails