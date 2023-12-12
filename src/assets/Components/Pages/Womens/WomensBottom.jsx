import Layout from "./../../layout/Layout";
import ProductGrid from "./../Components/ProductGrid/ProductGrid";
import womendata from "./womens-data.json";

const womenSweaters = womendata.womenOuterwears;

let womenItems = [...womenSweaters];

function WomensOuterwear() {
  return (
    <div>
      <Layout>
        <ProductGrid
          products={womenItems}
          category="womens"
          title="Womens-OuterWear"
        />
      </Layout>
    </div>
  );
}

export default WomensOuterwear;
