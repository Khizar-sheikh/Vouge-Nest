import Layout from "./../../layout/Layout";
import ProductGrid from "./../Components/ProductGrid/ProductGrid";
import menData from "./men-data.json";

const menTopItems = menData.mensweatshirt;
function MensTops() {
  return (
    <div>
      <Layout>
        <ProductGrid
          products={menTopItems}
          category="mens"
          title="Men SweatShirt"
        />
      </Layout>
    </div>
  );
}

export default MensTops;
