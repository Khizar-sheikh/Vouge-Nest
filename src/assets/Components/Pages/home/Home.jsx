import React from "react";
import Layout from "./../../layout/Layout";
import Herosection from "./../../Herosection/Herosection";
import menShirtvertical from '../../Images/categoryimages/men-shirt-vertical.jpg'
import menShirthorizontal from '../../Images/categoryimages/men-shirt-horizontal.jpg'
import mensjacketvertical from '../../Images/categoryimages/mens-jackets-vertical.jpg'
import mensjackethorizontal from '../../Images/categoryimages/mens-jacket-horizontal.jpg'
import { Link } from 'react-router-dom';
import CategoryComponent from './../../subcategory/CategoryComponent';
const linkdivstyle = "absolute inset-0 flex items-center sm:items-end sm:pb-40 pt-40 justify-center"

function Home() {
  return (
    <Layout>
      <Herosection />
      <div className="men-shirt relative">
  <CategoryComponent
    category="Men's Shirts"
    horizontalImage={menShirthorizontal}
    verticalImage={menShirtvertical}
    shopNowLink="/mens/Shirts"
  />
  <div className={linkdivstyle}>
    <Link to="/mens-shirt" className="border-2 border-white text-white font-bold px-4 py-2">Shop Now</Link>
  </div>
</div>
      <div className="men-jacket relative">
  <CategoryComponent 
    category="Men's Jackets"
    horizontalImage={mensjackethorizontal}
    verticalImage={mensjacketvertical}
    shopNowLink="/mens/Shirts"
  />
  <div className={linkdivstyle}>
    <Link to="/mens-shirt" className="border-2 border-white text-white font-bold px-4 py-2">Shop Now</Link>
  </div>
</div>
      <div className="men-shirt relative">
  <CategoryComponent
    category="Men's Shirts"
    horizontalImage={menShirthorizontal}
    verticalImage={menShirtvertical}
    shopNowLink="/mens/Shirts"
  />
  <div className={linkdivstyle}>
    <Link to="/mens-shirt" className="border-2 border-white text-white font-bold px-4 py-2">Shop Now</Link>
  </div>
</div>

    </Layout>
  );
}

export default Home;
