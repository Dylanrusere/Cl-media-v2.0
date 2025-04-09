import React, { useState, useEffect } from "react";
import "./Pages.css";
import img1 from "../assets/images/IMG_1698.JPG";
import img2 from "../assets/images/IMG_1698.JPG";
import img3 from "../assets/images/IMG_1698.JPG";
import img4 from "../assets/images/IMG_1698.JPG";
import { Footer } from "../components/Footer";
import { ExplorationsComponent } from "./ExplorationsComponent";

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
      <ExplorationsComponent/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};