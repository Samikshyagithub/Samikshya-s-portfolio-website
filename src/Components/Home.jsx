/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/samikshyabackground.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title, paragraph }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 300, width: "100%", height: "100%" }}>
        <img 
          className="background" 
          src={image} 
          alt={imageAltText} 
          style={{ 
            width: "50%", 
            height: "100%", 
            objectFit: "contain",
            position:"absolute",
          }} 
        />
      </div>
      <div style={{ position: "absolute", top: "7rem", left: "8rem", width: "25rem", zIndex: 1 }}>
      <h1 style={{ fontSize: "5rem", fontWeight: "bold", marginBottom: "2rem" }}>{name}</h1>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold",marginBottom: "1rem", padding: "0.5rem", backgroundColor: "lightpink", color: "black", borderRadius: "4px"  }}>{title}</h2>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "normal" ,marginBottom: "1rem"}}>{paragraph}</h3>
      </div>
      <div style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", filter: "invert(100%)"  }} alt="Arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
