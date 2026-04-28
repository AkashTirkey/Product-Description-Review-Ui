import React from 'react';
import style from "./style/Footer.module.css"
import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className ={style.footer}>
        <div className={style.container}>
            {/* left side */}
            <div className={style.left}>
                {/* quick links */}
                <h3>Quick Links</h3>
                <ul className={style.links}> 
                    <li>Home</li>
                    <li>Products</li>
                    <li>Our Founders</li>
                    <li>Product Journey</li>
                </ul>

                {/* Subscribe */}
                <div className={style.subscribe}>
                    <h3>Subscribe to our email</h3>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>

            {/* right side */}
            <div className={style.right}>

                <h3>Connect with us</h3>

                <p>📞 +91 1234567890</p>
                <p>support@maskabutters.in</p>
                <p>Maskabutters Pvt Ltd</p>
                <p>New Delhi, India</p>

                <div className={style.icons}>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaXTwitter/>
                </div>
            </div>
        </div>

        {/* break line horizontally */}
        <hr/> 
        {/* Bottom Section */}
        <div className={style.bottom}>

            <p>
                 © MaskaButters | Developed by Device Doctor India
            </p>

            <div className={style.policies}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Refund Policy</span>
                <span>Shipping Policy</span>
            </div>

        </div>

    </footer>
  )
}

export default Footer