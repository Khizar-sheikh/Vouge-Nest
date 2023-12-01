import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import getImagePath from "../Components/ProductDetails/Imagepath";
import Footer from "./../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, orderComplete, completedOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const DeliveryCharges = 5;
  const totalPriceWithDelivery = totalPrice + DeliveryCharges;

  function handle_complete_Order() {
    orderComplete();
    navigate("/order-confirm");
    console.log(completedOrder);
  }

  return (
    <div>
      <div className="lg:grid flex flex-col lg:grid-cols-2 md:grid md:grid-cols-2 items-center  justify-center ">
        <div className="order-1">
          <div className="border-b border-gray-900/10 pb-12 p-9 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block  px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block px-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-last lg:order-2 self-center ">
          <div className="container sticky   m-3 p-4  w-5/6 bg-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Order Details</h3>
            <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
              {cartItems.map((product, index) => (
                <li key={index} className="flex items-center py-6 space-x-4">
                  {/* Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={getImagePath(product.image, product.category)}
                      alt={product.name}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
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
                </li>
              ))}
            </ul>
            {/* Order Summary */}
            <div className="mt-8">
              <div className="border-t border-gray-300 pt-6">
                <h4 className="text-xl font-semibold">Order Summary</h4>
                <div className="flex justify-between mt-4">
                  <p>Subtotal:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p>Standard Delivery:</p>
                  <p>${DeliveryCharges}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-semibold">Total:</p>
                  <p className="font-semibold">
                    ${totalPriceWithDelivery.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-last">
          <div>
            <div className="grid grid-cols-1 mt-5 gap-y-6 m-8">
              <h2 className="text-xl font-bold">Payment</h2>
              <fieldset className="border border-gray-300 rounded-lg p-4">
                <legend className="font-bold">Payment type</legend>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      id="credit-card"
                      name="payment-type"
                      type="radio"
                      className="form-radio rounded-full text-indigo-600 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label htmlFor="credit-card" className="text-gray-700">
                      Credit card
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="paypal"
                      name="payment-type"
                      type="radio"
                      className="form-radio rounded-full text-indigo-600 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label htmlFor="paypal" className="text-gray-700">
                      PayPal
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      id="etransfer"
                      name="payment-type"
                      type="radio"
                      className="form-radio rounded-full text-indigo-600 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label htmlFor="etransfer" className="text-gray-700">
                      eTransfer
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="card-number"
                    className="font-bold text-gray-700"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autoComplete="cc-number"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name-on-card"
                    className="font-bold text-gray-700"
                  >
                    Name on card
                  </label>
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autoComplete="cc-name"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiration-date"
                    className="font-bold text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autoComplete="cc-exp"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="font-bold text-gray-700">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autoComplete="csc"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button onClick={handle_complete_Order}>Complete Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
