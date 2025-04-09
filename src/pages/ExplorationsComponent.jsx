import React, { useEffect, useState } from "react";
import "./Pages.css";

export const ExplorationsComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const apiKey = "74b35f84e06646b1a46d3065bcaa25ae"; // Replace with your News API key

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [apiKey]);

  // Limit the number of articles to display (e.g., 3 articles)
  const limitedBlogs = blogs.slice(0, 6);

  return (
    <section id="blog">
      <div className="overall_container">
        <p className="blog_overall_heading">Explorations</p>
        <div className="blog_grid_container">
          {limitedBlogs.length > 0 ? (
            limitedBlogs.map((blog, index) => (
              <div
                key={index}
                className={`blog_card_container ${blog.source.name.toLowerCase()}_container`}
              >
                <button className="green_blog_btn">#{blog.source.name}</button>
                <div className="blog_img_container">
                  <img src={blog.urlToImage} alt={blog.title} />
                </div>
                <p className="blog_date">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
                <p className="blog_heading">{blog.title}</p>
                <a href={blog.url} className="blog_link" target="_blank" rel="noopener noreferrer">
                  Tap in <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            ))
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>
    </section>
  );
};
