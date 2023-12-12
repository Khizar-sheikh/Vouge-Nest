import Layout from "./../../layout/Layout";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import womendata from "./womens-data.json";

const womenShirts = womendata.womenshirts;

let womenItems = [...womenShirts];

function WomensDresses() {
  return (
    <div>
      <Layout>
        <ProductGrid
          products={womenItems}
          category="womens"
          title="Women Shirts"
        />
      </Layout>
    </div>
  );
}

export default WomensDresses;
