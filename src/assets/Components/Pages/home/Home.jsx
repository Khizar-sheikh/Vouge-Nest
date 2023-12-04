import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import Layout from "./../../layout/Layout";
import Herosection from "./../../Herosection/Herosection";
import menShirtvertical from "../../Images/categoryimages/men-shirt-vertical.jpg";
import menShirthorizontal from "../../Images/categoryimages/men-shirt-horizontal.jpg";
import mensjacketvertical from "../../Images/categoryimages/mens-jackets-vertical.jpg";
import mensjackethorizontal from "../../Images/categoryimages/mens-jacket-horizontal.jpg";
import womensouterwearH from "../../Images/categoryimages/womens-horizontal.jpg";
import womensouterwearV from "../../Images/categoryimages/womens-vertical.jpg";
import DressVertical from "../../Images/categoryimages/WomesDress-Vertical.jpg";
import DressHorizontal from "../../Images/categoryimages/womensDress-horizontal.jpg";
import VelocityH from "../../Images/categoryimages/VelocityH.jpg";
import VelocityV from "../../Images/categoryimages/velocityV.jpg";
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
      <Herosection />
      <div className=" relative">
        <CategoryComponent
          category="Men's Shirts"
          horizontalimage={menShirthorizontal}
          verticalimage={menShirtvertical}
        />
        <div className={linkdivstyle}>
          <Link to="/mens/tops" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Womens Dresses"
          horizontalimage={DressHorizontal}
          verticalimage={DressVertical}
        />
        <div className={linkdivstyle}>
          <Link to="/womens/Dresses" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Men's Bottoms"
          horizontalimage={mensjackethorizontal}
          verticalimage={mensjacketvertical}
        />
        <div className={linkdivstyle}>
          <Link to="/mens/bottoms" className={linkstyle}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className=" relative">
        <CategoryComponent
          category="Outerwear"
          horizontalimage={womensouterwearH}
          verticalimage={womensouterwearV}
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
          verticalimage={VelocityV}
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
