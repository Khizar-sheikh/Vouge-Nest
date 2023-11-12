import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";


import hero from "../Images/hero-min.jpg";
import hero2 from "../Images/hero2-min.jpg";
import hero5 from "../Images/hero5-min.jpg";
import hero4 from "../Images/hero4-min.jpg";
import hero45 from "../Images/hero45-min.jpg";

const images = [hero2, hero, hero4, hero5, hero45];
const contentStyle: React.CSSProperties = {
  color: "#fff",
  background: "#364d79",
  width: "100vw",
  objectFit: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${images[0]})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "89vh",
};

const Herosection: React.FC = () => {
  return (
    <div className="minmax sm:min-h-full" style={{ minHeight: "60vh", maxHeight: "89vh" }}>
      <Carousel autoplay effect="fade">
        <Link to="/mens-casual">
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${images[0]})`,
            }}
          ></div>
        </Link>
        <Link to="/mens">
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${images[1]})`,
            }}
          ></div>
        </Link>
        <Link to="/womens">
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${images[2]})`,
            }}
          ></div>
        </Link>
        <Link to="/kids">
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${images[3]})`,
              backgroundSize : "100% 100%",
            }}
          ></div>
        </Link>
        <Link to="/velocity">
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${images[4]})`,
            }}
          ></div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Herosection;
