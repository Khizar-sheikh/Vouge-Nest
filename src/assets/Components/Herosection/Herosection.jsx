import { useState, useEffect } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

import hero from "../Images/HeroImg1.jpg";
import hero2 from "../Images/hero2-min.jpg";
import hero5 from "../Images/hero5-min.jpg";
import hero4 from "../Images/hero4-min.jpg";
import hero45 from "../Images/hero45-min.jpg";

const images = [
  { url: hero2, link: "/mens-casual" },
  { url: hero, link: "/mens" },
  { url: hero4, link: "/womens" },
  { url: hero5, link: "/kids" },
  { url: hero45, link: "/velocity" },
];

const contentStyle = {
  color: "#fff",
  background: "#364d79",
  width: "100vw",
  objectFit: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "89vh",
  maxWidth: "100vw",
  minWidth: "100vw",
};

const Herosection = () => {
  const [loading, setLoading] = useState(true);
  const [, setShowImages] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setShowImages(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="minmax sm:min-h-full"
      style={{ minHeight: "60vh", maxHeight: "89vh" }}
    >
      {loading ? (
        <div className="skeleton flex justify-center">
          <Skeleton.Image active style={{ width: "95vw", height: "95vh" }} />
        </div>
      ) : (
        <Carousel autoplay effect="fade">
          {images.map((image, index) => (
            <Link key={index} to={image.link}>
              <div
                style={{
                  ...contentStyle,
                  backgroundImage: `url(${image.url})`,
                }}
              ></div>
            </Link>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Herosection;
