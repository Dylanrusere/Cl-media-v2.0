import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Pages.css"
import issue1 from "../assets/images/IMG_4429.JPG";
import issue2 from "../assets/images/IMG_1698.JPG";
import { Footer } from "../components/Footer";

export const Research = () => {
  const magazines = [
    {
      image: issue1,
      issue: "Issue 1",
      link: "./article1.html",
    },

    {
      image: issue2,
      issue: "Issue 2",
      link: "./article2.html",
    },
  ];

  return (
    <div>
      <section id="magazines">
        <div className="magazines_container">
          <div className="green_bg_container">
            <p className="magazines_head">CL Media Magazines</p>
          </div>
          <div className="overall_container">
            <div className="magazines_grid_container">
              {magazines.map((mag, index) => (
                <div className="magazine_card" key={index}>
                  <img src={mag.image} alt={`Magazine ${mag.issue}`} className="magazine_card_img" />
                  <p className="magazine_name">{mag.issue}</p>
                  <a href={mag.link} className="blog_link research_links">
                    Tap in <FaArrowRightLong />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};
