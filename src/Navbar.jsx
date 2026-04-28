import React from "react";
import style from "./style/Navbar.module.css"
import {FaSearch, FaUser, FaHeart, FaShoppingCart} from "react-icons/fa"

const Navbar = () =>{
    return(
        <div className={style.container}>
        <nav className={style.nav}>
            <div className={style.logo}>
                <img src="https://www.maskabutters.in/cdn/shop/files/155-59.png.bv_82264024-8756-448b-9dba-7d0634ce132b.webp?v=1737534254&width=180" alt="logo" />
            </div>
            <ul className={style.navlinks}>
                <li>Home</li>
                <li>Products</li>
                <li>Blogs</li>
                <li>Contact</li>
                <li>Track My Order</li>
            </ul>

            
                <div className={style.icons}>
                    <FaSearch className={style.icon}/>
                    <FaUser className={style.icon} />
                    <FaHeart className={style.icon} />

                    <div className={style.cartWrapper}>
                        <FaShoppingCart className={style.icon}/>
                        <span className={style.cartCount}>2</span>
                    </div>
                </div>
        </nav>
        </div>
    )
}


export default Navbar;