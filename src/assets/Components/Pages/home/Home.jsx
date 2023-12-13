import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import Layout from "./../../layout/Layout";
import Herosection from "./../../Herosection/Herosection";
// Desktop Images
import MenSweatShrts from "../../Images/categoryimages/MenSweatShirts.webp";
import WomensSweaters from "../../Images/categoryimages/WomenSweaters.webp";
import VelocityH from "../../Images/categoryimages/VelocityH.jpg";
import MensJacket from "../../Images/categoryimages/MensJacket.webp";
import WomenShirts from "../../Images/categoryimages/WomenShirts.webp";
// Mobile Images
import MenSweatShrtsV from "../../Images/categoryimages/MenSweatShirtsV.webp";
import WomensSweatersV from "../../Images/categoryimages/WomenSweatersV.webp";
import MensJacketV from "../../Images/categoryimages/MensJacketV.webp";
import WomenShirtsV from "../../Images/categoryimages/WomenShirtsV.webp";

import { Link } from "react-router-dom";
import CategoryComponent from "./../../subcategory/CategoryComponent";

const linkdivstyle =
  "absolute inset-0 flex items-center sm:items-end sm:pb-40 pt-40 justify-center";
const linkstyle = " border-2 border-white text-white font-bold px-4 py-2";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="mt-3">
          <Skeleton.Image active style={{ width: "80vw", height: "80vh" }} />
        </div>
        <div className="mt-3">
          <Skeleton.Image active style={{ width: "80vw", height: "80vh" }} />
        </div>
        <div className="mt-3">
          <Skeleton.Image active style={{ width: "80vw", height: "80vh" }} />
        </div>
      </div>
    );
  }
  return (
    <Layout>
      <div className="mb-3 lg:mb-1">
        <Herosection />
      </div>
      <div className=" relative pt-16 lg:pt-14 2xl:pt-20  ">
        <CategoryComponent
          category="Men SweatShirt"
          horizontalimage={MenSweatShrts}
          verticalimage={MenSweatShrtsV}
        />
        <div className={linkdivstyle}>
          <Link to="/mens/sweatshirts" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Womens Shirts"
          horizontalimage={WomenShirts}
          verticalimage={WomenShirtsV}
        />
        <div className={linkdivstyle}>
          <Link to="/womens/Shirts" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Men's Jacket"
          horizontalimage={MensJacket}
          verticalimage={MensJacketV}
        />
        <div className={linkdivstyle}>
          <Link to="/mens/Jacket" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Women OuterWear"
          horizontalimage={WomensSweaters}
          verticalimage={WomensSweatersV}
        />
        <div className={linkdivstyle}>
          <Link to="/womens/outerwear" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative hidden lg:block md:block">
        <CategoryComponent
          category="Velocity"
          horizontalimage={VelocityH}
          verticalimage={VelocityH}
          className=" hidden lg:block md:block "
        />
        <div className={linkdivstyle}>
          <Link to="/velocity" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
