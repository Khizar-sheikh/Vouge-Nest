import Layout from './../../layout/Layout';
import ProductGrid from './../Components/ProductGrid/ProductGrid';
import menData from '../../Pages/mens/men-data.json';

const velocityProducts = menData.menShirts

function Velocity() {
  return (
    <div>
      <Layout>
<ProductGrid products={velocityProducts} category= "velocity" title="Velocity" /> 
      </Layout>
    </div>
  )
}

export default Velocity
