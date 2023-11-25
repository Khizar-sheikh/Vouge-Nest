import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";

import hero from "../Images/hero-min.jpg";
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

const contentStyle: React.CSSProperties = {
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
  maxWidth : "100vw",
  minWidth : "100vw"
};

const Herosection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    // Simulate carousel image loading with a delay
    const timeout = setTimeout(() => {
      setLoading(false);
      setShowImages(true);
    }, 1000); // Show the skeleton for 1 seconds before displaying images

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="minmax sm:min-h-full" style={{ minHeight: "60vh", maxHeight: "89vh" }}>
      {loading ? (
<div className="skeleton">
<Skeleton height='5vh' startColor='gray.300' endColor='gray.100' />
<div className="space absolute top-1 p-2"></div>
<Skeleton height='100vh'  startColor='black' endColor='grey.100' />
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
