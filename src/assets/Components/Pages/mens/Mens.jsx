import menData from "./men-data.json"; // Import your JSON data here
import Layout from "./../../layout/Layout";
import ProductGrid from "../Components/ProductGrid/ProductGrid";

const Men = () => {
  const menShirts = menData.mensweatshirt;
  const menBottoms = menData.menJackets;

  let menItems = [...menShirts, ...menBottoms];

  return (
    <div>
      <Layout>
        <ProductGrid
          products={menItems}
          category="mens"
          title="Mens category"
        />
      </Layout>
    </div>
  );
};

export default Men;
