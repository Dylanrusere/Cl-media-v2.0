import React from "react";
import "./Pages.css"
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="contact_grid_container">
          {/* Left side: Contact Details */}
          <div className="green_contact_container">
            <div className="overall_container">
              <p className="contact_us">CONTACT US</p>
              <p className="here_to_help">We`re here to help you!</p>
              <div className="contact_deatils_container contact_details_top">
                <div className="contact_details_icon_container">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="link_container">
                  <p className="link_head">Phone</p>
                  <a href="tel:+123-456-7690">+123-456-7690</a>
                </div>
              </div>
              <div className="contact_deatils_container">
                <div className="contact_details_icon_container">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
                <div className="link_container">
                  <p className="link_head">Email</p>
                  <a href="mailto:info@clmedia.com">info@clmedia.com</a>
                </div>
              </div>
              <div className="contact_deatils_container">
                <div className="contact_details_icon_container">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="link_container">
                  <p className="link_head">Address</p>
                  <p>123 Anywhere St, City</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side: Form */}
          <div className="form_container">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="number">Phone Number:</label>
              <input type="tel" id="number" name="number" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="10" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
};
