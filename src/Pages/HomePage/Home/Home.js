import React from "react";
import Features from "../Features/Features";
import Guidelines from "../Guidelines/Guidelines";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";
import About from "../About/About";

const Home = () => {
  // COLOR THEME:
  // base: white
  // other: #FAF620 OR #FFB606 OR #ffb606, #FF1F18, #12E344
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <Guidelines></Guidelines>
      <About></About>
    </div>
  );
};

export default Home;
