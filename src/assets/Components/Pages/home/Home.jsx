import React, { useState, useEffect } from "react";
import { Skeleton } from "@chakra-ui/react";
import Layout from "./../../layout/Layout";
import Herosection from "./../../Herosection/Herosection";
import menShirtvertical from "../../Images/categoryimages/men-shirt-vertical.jpg";
import menShirthorizontal from "../../Images/categoryimages/men-shirt-horizontal.jpg";
import mensjacketvertical from "../../Images/categoryimages/mens-jackets-vertical.jpg";
import mensjackethorizontal from "../../Images/categoryimages/mens-jacket-horizontal.jpg";
import womensouterwearH from "../../Images/categoryimages/womens-horizontal.jpg"
import womensouterwearV from "../../Images/categoryimages/womens-vertical.jpg"
import DressVertical from '../../Images/categoryimages/WomesDress-Vertical.jpg'
import DressHorizontal from '../../Images/categoryimages/womensDress-horizontal.jpg'
import VelocityH from "../../Images/categoryimages/velocityH.jpg"
import VelocityV from "../../Images/categoryimages/velocityV.jpg"
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

    return(
   <div>
       <Skeleton height='90vh' paddingTop={"10px"}  />
       <Skeleton height='90vh'  paddingTop={"10px"}  />
       <Skeleton height='90vh' paddingTop={"10px"} />
         </div>
    );
  }
  return (
    <Layout>
      <Herosection />
      <div className=" relative">
        <CategoryComponent
          category="Men's Shirts"
          horizontalImage={menShirthorizontal}
          verticalImage={menShirtvertical}
          shopNowLink="/mens/Shirts"
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
          horizontalImage={DressHorizontal}
          verticalImage={DressVertical}
          shopNowLink="/womens/Dresses"
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
          horizontalImage={mensjackethorizontal}
          verticalImage={mensjacketvertical}
          shopNowLink="/mens/bottom"
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
          horizontalImage={womensouterwearH}
          verticalImage={womensouterwearV}
          shopNowLink="/womens-outerwear"
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
          horizontalImage={VelocityH}
          verticalImage={VelocityV}
          shopNowLink="/velocity"
          className = " hidden lg:block md:block "
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
