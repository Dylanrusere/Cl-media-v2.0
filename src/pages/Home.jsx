import React, { useState, useEffect } from "react";
import "./Pages.css";
import img1 from "../assets/images/IMG_1698.JPG";
import img2 from "../assets/images/IMG_1698.JPG";
import img3 from "../assets/images/IMG_1698.JPG";
import img4 from "../assets/images/IMG_1698.JPG";
import { Footer } from "../components/Footer";

const images = [
    img1,
    img2,
    img3,
    img4,
];

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleControlClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <section id="hero_section">
        <div className="hero">
          <div className="hero_container">
            {images.map((img, index) => (
              <div
                key={index}
                className={`hero-item ${index === activeIndex ? "active_hero" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="overlay"></div>
              </div>
            ))}

            <div className="hero-controls">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={index === activeIndex ? "active_hero" : ""}
                  onClick={() => handleControlClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="spacing_div"></div>

      {/* Hero Section Content */}
      <section id="hero_section_hero">
        <div className="overall_container">
          <div className="hero_content_container">
            <p className="hero_head">
              Welcome to <span>CL Media</span>
            </p>
            <p className="sub_head">Ready to embark on an adventure?</p>
          </div>
        </div>
      </section>

      <div className="spacing_div"></div>

      {/* Blog Section */}
      <section id="blog">
        <div className="overall_container">
          <p className="blog_overall_heading">Explorations</p>
          <div className="blog_grid_container">

            <div className="blog_card_container lifestyle_container">
              <button className="green_blog_btn">#Lifestyle</button>
              <div className="blog_img_container">
                <img src="./assets/images/IMG_4429.JPG" alt="" />
              </div>
              <p className="blog_date">July 22, 2028</p>
              <p className="blog_heading">WFH`s the New Normal</p>
              <a href="./article1.html" className="blog_link">
                Tap in <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div className="blog_card_container mental_health_container">
              <button className="green_blog_btn">#Mental Health</button>
              <div className="blog_img_container">
                <img src="./assets/images/IMG_4429.JPG" alt="" />
              </div>
              <p className="blog_date">July 22, 2028</p>
              <p className="blog_heading">What`s New with the Company</p>
              <a href="./article2.html" className="blog_link">
                Tap in <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div className="blog_card_container art_container">
              <button className="green_blog_btn">#Art</button>
              <div className="blog_img_container">
                <img src="./assets/images/IMG_4429.JPG" alt="" />
              </div>
              <p className="blog_date">July 22, 2028</p>
              <p className="blog_heading">How to implement AI In Your Work</p>
              <a href="./article3.html" className="blog_link">
                Tap in <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};