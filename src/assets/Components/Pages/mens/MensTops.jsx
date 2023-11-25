import React from 'react'
import Layout from './../../layout/Layout';
import ProductGrid from './../Components/ProductGrid/ProductGrid';
import menData from './men-data.json';

const menTopItems = menData.menShirts
function MensTops() {
  return (
    <div>
      <Layout>
  <ProductGrid products={menTopItems}  category="mens" title="Mens Shirts" />
      </Layout>
    </div>
  )
}

export default MensTops
