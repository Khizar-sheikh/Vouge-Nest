import Layout from "./../../layout/Layout";
import Header from "./../../header/Header";
import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import getImagePath from "../Components/ProductDetails/Imagepath";
import { Link } from "react-router-dom";

function Order() {
  const { completedOrder } = useContext(CartContext);

  const totalPrice = completedOrder.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const DeliveryCharges = 5;
  const totalPriceWithDelivery = totalPrice + DeliveryCharges;
  return (
    <Layout>
      <Header title="Your Orders" />
      {completedOrder.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <Link to="/">
              <svg
                className="w-20 h-20 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </Link>
            <p className="text-3xl text-gray-600 mt-4 font-semibold">
              You have no orders
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Check back later for updates.
            </p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {completedOrder.map((product, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4 mb-8">
                <h3 className="text-xl font-bold mb-4">Order {index + 1}</h3>

                <div
                  key={index}
                  className="flex items-center space-x-4 border-b border-gray-300 pb-4 mb-4"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={getImagePath(product.image, product.category)}
                      alt={product.name}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p className="text-sm text-gray-600">
                      {product.attributes.color}
                    </p>
                    <div className="flex items-center mt-2">
                      <p className="text-sm text-gray-600">
                        Qty {product.quantity}
                      </p>
                      <p className="ml-4">${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Display Order Summary after all orders */}
          <div className="mt-8 bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mt-4">
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Standard Delivery:</p>
              <p>${DeliveryCharges * completedOrder.length}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="font-semibold">Total for all orders:</p>
              <p className="font-semibold">
                ${totalPriceWithDelivery.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Order;
