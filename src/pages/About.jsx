import React from "react";
import { Footer } from "../components/Footer";
import heroAbout from "../assets/images/IMG_7371.jpg";
import tatenda from "../assets/images/IMG_7371.jpg";
import photography from "../assets/icons/photography.png";
import videography from "../assets/icons/camera.png";
import projectDocumentation from "../assets/icons/project.png";
import documentary from "../assets/icons/documentary.png";
import newsletter from "../assets/icons/newsletter.png";
import socialMedia from "../assets/icons/social-media.png";

export const About = () => {
  const services = [
    {
      img: photography,
      title: "Photography",
      desc: "Capturing moments that tell your story. Our professional photography services ensure high-quality, visually stunning images that leave a lasting impression.",
    },
    {
      img: videography,
      title: "Videography",
      desc: "Bring your vision to life with cinematic video production. From corporate events to promotional content, we create compelling videos that engage and inspire.",
    },
    {
      img: projectDocumentation,
      title: "Project Documentation",
      desc: "Comprehensive documentation of your projects from start to finish. We ensure every milestone is recorded with precision for transparency and future reference.",
    },
    {
      img: documentary,
      title: "Documentary Production",
      desc: "Telling real stories through powerful visual storytelling. Our documentary production services focus on impactful narratives that inform, educate, and inspire audiences.",
    },
    {
      img: newsletter,
      title: "Newsletter Production",
      desc: "Keep your audience engaged with professionally designed newsletters. We craft compelling content that enhances brand communication and customer retention.",
    },
    {
      img: socialMedia,
      title: "Social Media Management",
      desc: "Boost your online presence with strategic social media management. We create, schedule, and manage content that strengthens your brand and connects with your audience.",
    },
  ];

  return (
    <div>
      {/* About Section */}
      <section id="about_hero">
        <div className="overall_container">
          <div className="about_hero_grid_container">
            <div className="about_hero_image">
              <img src={heroAbout} alt="CL Media Team" />
            </div>
            <div className="about_hero_text">
              <p className="humambo_about">
                <strong>CL Media</strong> is a creative communications, PR, and
                research consultancy operating within the arts, and media
                sectors.
                <br />
                <br />
                We specialize in storytelling, research, and project
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="overall_container">
          <p className="services_head">Services</p>
          <div className="services_grid_container">
            {services.map((service, index) => (
              <div className="service_card_container" key={index}>
                <img
                  className="service_card_img"
                  src={service.img}
                  alt={service.title}
                />
                <p className="service_card_head">{service.title}</p>
                <p className="service_card_par">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-conspirators Section */}
      <section id="conspirators">
        <div className="overall_container">
          <div className="conspirators_grid_container">
            <div className="conspirators_conspirators">
              <p className="conspirators_head">Founder and Team Lead</p>
            </div>
            <div className="conspirators_profiles_grid_container">
              <div className="conspirators_container">
                <div className="profile_img_container">
                  <img
                    src={tatenda}
                    alt="Tatenda Kanengoni"
                  />
                </div>
                <p className="profile_head">TATENDA KANENGONI</p>
                <p className="position_position">
                  Tatenda Kanengoni is an experienced cultural writer, researcher and
                  visual storyteller. Her work brings attention to important
                  issues within arts and culture communities with a strong focus
                  on underreported stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};