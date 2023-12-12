import ProductGrid from "../Components/ProductGrid/ProductGrid";
import menData from "./men-data.json"; // Import your JSON data here
import Layout from "./../../layout/Layout";

function MensBottom() {
  const menBottoms = menData.menJackets;
  let menItems = [...menBottoms];
  return (
    <div>
      <Layout>
        <ProductGrid products={menItems} category="mens" title="Mens Jackets" />
      </Layout>
    </div>
  );
}

export default MensBottom;
