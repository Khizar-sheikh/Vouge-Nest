import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, category, title }) => {
  const [sortBy, setSortBy] = useState("Featured");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    let updatedSortedProducts = [...sortedProducts];

    switch (selectedSortBy) {
      case "Newest":
        updatedSortedProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "Best Selling":
        updatedSortedProducts.sort((a, b) => b.soldCount - a.soldCount);
        break;
      case "Low to High":
        updatedSortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "High to Low":
        updatedSortedProducts.sort((a, b) => b.price - a.price);
        break;
        case "Featured":
          updatedSortedProducts.sort((a, b) => {
            return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
          });
          break;
      default:
        break;
    }

    setSortedProducts(updatedSortedProducts);
    console.log(updatedSortedProducts);
  };

  const getImagePath = (productName) => {
    // Modify this logic to match your category and product names
    if (category === "mens") {
      return `/src/assets/Components/Images/MensProduct/${productName}.jpg`;
    } else if (category === "womens") {
      return `/src/assets/Components/Images/WomensProduct/${productName}.jpg`;
    } else if (category === "velocity") {
      return `/src/assets/Components/Images/VelocityProduct/${productName}.jpg`;
    }
    return "";
  };

  return (
    <div>
      <div className=" flex flex-col lg:flex-row md:flex-row justify-around items-center mt-3  ">
        <div>
          {/* <PageHeader title={title} /> */}
          <h1 className="text-center text-3xl font-extrabold font-sans ">
            {title}
          </h1>
        </div>
        <div
          id="sortandstyle"
          className="flex justify-around items-center py-4 "
        >
          <div className="sorting">
            <select
              className="border border-gray-300 rounded-md py-4 px-12 focus:outline-none "
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="Newest">Newest</option>
              <option value="Featured">Featured</option>
              <option value="Best Selling">Best Selling</option>
              <option value="Low to High">Low To High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white mx-auto max-w-7xl px-4 py-8 sm:px-6  ">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10  md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
          {sortedProducts.map((product, index) => (
            <div key={index} className="self-center justify-self-center">
              <div className=" h-60 w-auto">
                <img
                  // src={product1}
                  src={getImagePath(product.image)}
                  alt={product.name}
                  className="h-full"
                />
              </div>
              <div className="details">
                <h3 className="text-sm text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  <Link to={`/products/${product.id}`} state={{ product }}>
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
