/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Samikshya Upadhyay",
  title: "A Tech Savvy",
  paragraph:"With a burning passion to make a difference, I am determined to create a world where gender disparities in the STEM and tech fields are eradicated, and opportunities are abundant for all.",
  email: "su58071320@gmail.com",
  gitHub: "https://github.com/Samikshyagithub",
  instagram: "https://www.instagram.com/_samikshyay_/",
  linkedIn: "https://www.linkedin.com/in/samikshyaupadhyay/",
  medium: "https://medium.com/@su58071320",
  twitter: "https://twitter.com/_thesapphire_/",
  
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} paragraph={siteProps.paragraph}/>
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
