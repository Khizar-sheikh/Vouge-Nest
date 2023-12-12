import Layout from "./../../layout/Layout";
import ProductGrid from "./../Components/ProductGrid/ProductGrid";
import data from "./velocitydata.json";

const velocityProducts = data.velocityshirts;

function Velocity() {
  return (
    <div>
      <Layout>
        <ProductGrid
          products={velocityProducts}
          category="velocity"
          title="Velocity"
        />
      </Layout>
    </div>
  );
}

export default Velocity;
