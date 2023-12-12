import Layout from "../../layout/Layout";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import womendata from "./womens-data.json";

const womenShirts = womendata.womenshirts;
const womenOuterwears = womendata.womenOuterwears;

let womenItems = [...womenShirts, ...womenOuterwears];

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
