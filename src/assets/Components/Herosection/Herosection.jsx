import { useState, useEffect } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

// Desktop Images
import hero from "../Images/hero.webp";
import hero2 from "../Images/hero2.webp";
import hero4 from "../Images/hero4.webp";
import hero45 from "../Images/hero3.webp";

import heroV from "../Images/heroV.webp";
import hero2V from "../Images/hero2V.webp";
import hero4V from "../Images/hero4V.webp";
import hero45V from "../Images/hero3V.webp";

// Mobile Images

const images = [
  { url: hero2, link: "/mens" },
  { url: hero, link: "/mens" },
  { url: hero4, link: "/womens" },
  { url: hero45, link: "/velocity" },
];

const vertical = [
  { url: hero2V },
  { url: heroV },
  { url: hero4V },
  { url: hero45V },
];

const contentStyle = {

  color: "#fff",
  background: "#364d79",
  width: "100vw",
  objectFit: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  maxWidth: "100%",
  minWidth: "100%",
};

const Herosection = () => {
  const [loading, setLoading] = useState(true);
  const [, setShowImages] = useState(false);

  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div className=" my-8 ">
            <Skeleton variant="rectangular" />
          </div>
          <Skeleton.Image active style={{ width: "95vw", height: "95vh" }} />
        </div>
      ) : (
        <Carousel autoplay={true} autoplaySpeed={3500} effect="fade" dotPosition="right">
          {images.map((image, index) => (
            <Link key={index} to={image.link}>
              <div
                style={{
                  ...contentStyle,
                  backgroundImage: isHorizontal
                    ? `url(${image.url})`
                    : `url(${vertical[index].url})`,
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
