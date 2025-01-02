import React from "react";
import "./Banner.css";
import video from "../assets/bannerVideo.mp4";

function Banner() {
  return (
    <section className="banner">
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row bannerRow">
          <div className="col-md-12 bannerTexts">
            <h1 className="bannerTitle">BMW RUHU: HER RUHA BİR RUH EŞİ.</h1>
            <p className="bannerDsc">
              BMW modellerinde özel yıl sonu fırsatları.
            </p>
            <button className="examineBtn">İnceleyin</button>
          </div>
        </div>
      </div>
      
    </section>

  );
}

export default Banner;
