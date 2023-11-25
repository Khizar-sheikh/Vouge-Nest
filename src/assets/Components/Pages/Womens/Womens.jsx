import React from "react";
import Layout from "../../layout/Layout";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import womendata from "../../Pages/mens/men-data.json";

const womenShirts = womendata.menShirts;
const womenBottoms = womendata.menBottoms;

let womenItems = [...womenShirts, ...womenBottoms];

function Womens() {
  return (
    <Layout>
      <ProductGrid
        products={womenItems}
        category="womens"
        title="Womens-Category"
      />
    </Layout>
  );
}

export default Womens;
