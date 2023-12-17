import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../../layout/Layout";
import { Rate, Tag, Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { CartContext } from "../../../context/CartContext";
import getImagePath from "./Imagepath";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [showAlert, setshowAlert] = useState(false);
  const [addTocart, setaddedTocart] = useState(false);
  const location = useLocation();
  const product = location.state.product;
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isImageChanged, setIsImageChanged] = useState(false); // Track if image cha

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageChanged(true); // Set flag to true when image changes
    setTimeout(() => {
      setIsImageChanged(false); // Reset flag after the transition duration
    }, 500); // Adjust this duration to match your CSS transition duration
  };

  const handleAddToCart = () => {
    addToCart(product);
    setaddedTocart(true);
    setshowAlert(true);

    setTimeout(() => {
      setaddedTocart(false);
      setshowAlert(false);
    }, 3000);
  };

  return (
    <Layout>
      {showAlert && (
        <div className="bg-green-600 text-white p-3 fixed top-20 w-40 mx-auto left-0 right-0 text-center rounded-lg border-4 border-green-300">
          Added to Cart
        </div>
      )}
      <div className=" px-4 py-8 dark:text-gray-50 text-gray-600  ">
        <div className="grid grid-cols-1  lg:grid-cols-2 place-items-center  md:grid-cols-2 items-center 2xl:text-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex lg:flex-col flex-row lg:justify-between order-last lg:order-first justify-between">
              {product.additionalimages.map((image, index) => (
                <div
                  className="subimage"
                  key={index + 1}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={getImagePath(image, product.category)}
                    alt=""
                    className="lg:h-32 w-auto mb-4 mr-5 mt-2 h-24"
                  />
                </div>
              ))}
            </div>

            <div>
              <img
                src={getImagePath(selectedImage, product.category)}
                alt={product.name}
                id="imageheight-details"
                className={`${isImageChanged ? 'image-transition' : ''}`} // Apply the class conditionally
                style={{ width: "auto" }}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <div className="mt-6 flex items-center">
              <span className="font-semibold mr-4">Availability:</span>
              {product.availability ? (
                <Tag icon={<CheckCircleOutlined />} color="success">
                  Available
                </Tag>
              ) : (
                <Tag icon={<CloseCircleOutlined />} color="error">
                  Out of Stock
                </Tag>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <span className="font-semibold mr-4">Ratings:</span>
              <Rate
                disabled
                allowHalf
                value={product.ratings.average}
                style={{ fontSize: "1.5em" }} // Adjust size
              />
              <span className="ml-2 text-lg">
                ({product.ratings.count}{" "}
                {product.ratings.count === 1 ? "review" : "reviews"})
              </span>
            </div>
            <p className=" my-4 flex items-center ">
              <span className="font-semibold block mb-1">Price:</span>
              <span className="font-semibold text-lg px-2">
                ${product.price}
              </span>
            </p>
            <div className=" mt-4">
              {/* <span className="font-semibold">Size:</span> */}
              <div className="flex items-center mt-2 space-x-4">

              </div>
              <Button
                disabled={!product.availability}
                onClick={handleAddToCart}
                style={{
                  textAlign: "center",

                  backgroundColor: addTocart
                    ? "#34D399"
                    : product.availability
                      ? "#1890ff"
                      : "#d9d9d9",

                  color: product.availability ? "#fff" : "#555",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  outline: "none",
                  marginTop: "10px",
                  width: "160px",
                }}
              >
                {addTocart
                  ? "Added to Cart"
                  : product.availability
                    ? "Add to Cart"
                    : "Out of Stock"}
              </Button>
            </div>
            <p className=" my-4 flex items-center ">
              <span className="font-semibold block mb-1">Category:</span>
              {"     "}
              <span className="capitalize px-2">{product.category}</span>
            </p>
            <div className="  mb-6">
              <span className="font-semibold block mb-2">Description:</span>
              <ul className="list-disc list-inside">
                {product.description.map((point, index) => (
                  <li key={index} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" mb-4">
              <span className="font-semibold block mb-2">Attributes:</span>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Color:</span>{" "}
                  {product.attributes.color}
                </li>
                <li>
                  <span className="font-semibold">Material:</span>{" "}
                  {product.attributes.material}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
