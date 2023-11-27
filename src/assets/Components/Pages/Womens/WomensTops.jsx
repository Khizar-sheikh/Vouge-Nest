import Layout from "./../../layout/Layout";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import womendata from "../../Pages/mens/men-data.json";

const womenShirts = womendata.menShirts;

let womenItems = [...womenShirts];

function WomensDresses() {
  return (
    <div>
      <Layout>
        <ProductGrid
          products={womenItems}
          category="womens"
          title="Womens-Dresses"
        />
      </Layout>
    </div>
  );
}

export default WomensDresses;
