import React from 'react';
import menData from './men-data.json'; // Import your JSON data here
import Layout from './../../layout/Layout';
// import ProductContainer from '../Components/ProductGrid/ProductContainer';
import ProductGrid from '../Components/ProductGrid/ProductGrid';

const Men = () => {
  const menShirts = menData.menShirts;
  const menBottoms = menData.menBottoms;

  let menItems = [ ...menShirts, ...menBottoms];


  return (
    <div>
     <Layout>
    <ProductGrid products={menItems}  category="mens" title="Mens category"/>
     </Layout>
    </div>
  );
};


export default Men;
