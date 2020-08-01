import React from 'react';
import {FaPhone,FaEnvelope,FaFacebookF,FaTwitterSquare,FaInstagram,FaGooglePlusG,FaLinkedinIn } from "react-icons/fa";
import './Style.css';
import {NavLink} from 'react-router-dom';
  
const Footer= () => {
    return (
    <div className="footer">
        <div className="footer_container">
           <div className="footer_content">
             <h2 className="footer_para">Your Logo</h2>
             <p className="footer_para">Your tagline here</p>
             <h3 className="footer_heading">About us</h3>
             <p className="footer_para">We want only talented student and unique startups together</p>
             <ul className="footer_contact">
                <li className="footer_list">
                  <p className="footer_contact"><FaPhone className="footer_contact_icon"/>+91 9999999999</p>
                </li>
                <li className="footer_list">
                  <p className="footer_contact"><FaEnvelope className="footer_contact_icon "/>ab123@gmail.com</p>
                </li>
             </ul>
           </div> 
         <div className="Information">
           <h3 className="footer_heading">Information</h3>
           <ul>
            <li className="footer_list">
              <NavLink className="footer_link" to="/AboutUs">About us</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/MoreSearch">MoreSearch</NavLink>
            </li>
            <li className="footer_list">
              <NavLink  className="footer_link"  to="/Blog">Blog</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/Testinomials">Testinomials</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/Events">Events</NavLink>
            </li>
          </ul>
         </div>
         <div className="helpfulLinks">
            <h3 className="footer_heading">Helpful Links</h3>
          <ul>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/AboutUs">Services</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/Blog">Support</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/Events">Terms & Conditions</NavLink>
            </li>
            <li className="footer_list">
             <NavLink  className="footer_link"  to="/Testinomials">Privacy Policy</NavLink>
            </li>
          </ul>
         </div>
         <div className="Subcribe">
              <h3 className="footer_heading">Subscribe more info</h3>
             <form className="footer_form">
               <input className="footer_input"type="email" placeholder="Enter Your Email"/>
               <button className="footer_subscribe_btn">Subscribe</button>
             </form>
         </div>
     </div>
     <hr className="footer_line"/>
     <div className="footer_social_icon_container">
       <NavLink to="/Blog"> <FaFacebookF className="footer_social_icon"/> </NavLink>
       <NavLink to="/Blog"> <FaTwitterSquare className="footer_social_icon"/> </NavLink>
       <NavLink to="/Blog"> <FaInstagram className="footer_social_icon"/></NavLink>
       <NavLink to="/Blog"> <FaGooglePlusG className="footer_social_icon"/></NavLink>
       <NavLink to="/Blog"> <FaLinkedinIn className="footer_social_icon"/></NavLink>
      </div>
    </div>
    );
}

export default Footer;