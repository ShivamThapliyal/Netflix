import React from "react";
import Navbar from "../../navbar/Navbar";
import { assets } from "../../../assets/assets.js";
import "./home.css";
import Title from "../../Title/Title";
import Footer from "../../Footer/Footer.jsx";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={assets.hero_banner} alt="" className="hero-banner" />
        <div className="title">
          <img src={assets.hero_title} alt="" className="title-hero" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="btns">
            <button className="btn1">
              <img src={assets.play_icon} alt="" />
              Play
            </button>
            <button className="btn1 dark">
              <img src={assets.info_icon} alt="" />
              Info
            </button>
          </div>
          <Title />
        </div>
      </div>
      <div className="more-card">
        <Title title={"Romantic Movies"} category={"popular"} />
        <Title title={"Action Movies"} category={"top_rated"} />
        <Title title={"BlockBuster Movies"} category={"upcoming"} />
        <Title title={"Comedy Movies"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
