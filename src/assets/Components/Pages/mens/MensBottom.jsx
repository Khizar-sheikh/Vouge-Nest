import ProductGrid from '../Components/ProductGrid/ProductGrid';
import menData from './men-data.json'; // Import your JSON data here
import Layout from './../../layout/Layout';


function MensBottom() {
  const menBottoms = menData.menBottoms;
  let menItems = [ ...menBottoms];
  return (
    <div>
      <Layout>
        <ProductGrid products={menItems} category="mens" title="Mens Bottom"/>
      </Layout>
    </div>
  )
}

export default MensBottom
