import React from 'react'
import Layout from './../../layout/Layout';
import ProductGrid from './../Components/ProductGrid/ProductGrid';
import womendata from "../../Pages/mens/men-data.json"

const womenShirts = womendata.menShirts;
const womenBottoms = womendata.menBottoms;

let womenItems = [ ...womenBottoms];

function WomensOuterwear() {
  return (
    <div>
      <Layout>
< ProductGrid products={womenItems} category="womens" title="Womens-OuterWear"/>
      </Layout>
    </div>
  )
}

export default WomensOuterwear;