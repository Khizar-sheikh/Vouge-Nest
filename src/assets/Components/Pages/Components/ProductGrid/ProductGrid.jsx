import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import getImagePath from "../ProductDetails/Imagepath";
import { Pagination } from "antd";

const ProductGrid = ({ products, title }) => {
  const [sortBy, setSortBy] = useState("Featured");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const Itemperpage = 12;

  const indexOfLastItem = currentPage * Itemperpage;
  const indexOfFirstItem = indexOfLastItem - Itemperpage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  function windowscroll() {
    window.scrollTo({
      top: 10,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  }
  const handlepageChange = (page) => {
    windowscroll();
    setcurrentPage(page);
  };
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / Itemperpage);

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
  };

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-gray-50 text-gray-900">
      <div className=" flex flex-col lg:flex-row md:flex-row justify-around items-center pt-3 xl:py-5  ">
        <div>
          <h1 className="text-center text-3xl font-extrabold font-sans 2xl:text-5xl ">
            {title}
          </h1>
        </div>

        <div
          id="sortandstyle"
          className="flex justify-around items-center py-4 2xl:py-6 2xl:text-2xl "
        >
          <div className="sorting dark:text-gray-900">
            <select
              className="border border-gray-300 rounded-md py-4 px-12 focus:outline-none dark:bg-white "
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

      <div className="relative">
        <div className="grid grid-cols-2 gap-x-3 mx-9 gap-y-10  md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((product, index) => (
            <div key={index} className="grid  justify-self-center">
              <div className="">
                <img
                  // src={product1}
                  src={getImagePath(product.image, product.category)}
                  alt={product.name}
                  className="h-auto  max-w-full "
                />
              </div>
              <div className="details 2xl:text-lg">
                <h3 className="text-sm ">{product.name}</h3>
                <p className="mt-1 text-lg font-medium ">
                  ${product.price}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  <Link
                    onClick={windowscroll}
                    to={`/products/${product.id}`}
                    state={{ product }}
                  >
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" mx-auto w-max p-7 pt-8 ">
          <Pagination
            defaultCurrent={1}
            total={totalPages}
            pageSize={1}
            onChange={handlepageChange}
            hideOnSinglePage
            itemRender={(current, type, originalElement) => {
              if (type === "page") {
                return (
                  <a className="inline-block rounded-lg bg-gray-200 text-sm md:text-base lg:text-lg">
                    {current}
                  </a>
                );
              }
              return originalElement;
            }}
          />
        </div>
      </div>
    </div>
  );
};
ProductGrid.propTypes = {
  products: PropTypes.array,
  title: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
};

export default ProductGrid;
