import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import getImagePath from "../Components/ProductDetails/Imagepath";
import Footer from "./../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
          <PersonalInfo />
        </div>
        <div className="order-last lg:order-2 self-center ">
          <div className="container sticky   m-3 p-4  w-5/6 bg-gray-200 dark:text-gray-600">
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
        <div className="order-2 lg:order-last ">
          <div>
            <div className="grid grid-cols-1 gap-y-6 m-8 dark:text-gray-100">
              <h2 className="text-2xl  font-semibold">Payment</h2>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  streetAddress: "",
                  city: "",
                  country: "",
                  region: "",
                  postalCode: "",
                  "payment-type": "",
                  "card-number": "",
                  "name-on-card": "",
                  "expiration-date": "",
                  cvc: "",
                }}
                onSubmit={handle_complete_Order}
                validate={(values) => {
                  const errors = {};

                  if (!values["payment-type"]) {
                    errors["payment-type"] = "Payment type is required";
                  }
                  if (!values["card-number"]) {
                    errors["card-number"] = "Card number is required";
                  }
                  if (!values["name-on-card"]) {
                    errors["name-on-card"] = "Name on card is required";
                  }
                  if (!values["expiration-date"]) {
                    errors["expiration-date"] = "Expiration date is required";
                  }
                  if (!values["cvc"]) {
                    errors["cvc"] = "CVC is required";
                  }
                  return errors;
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6 dark:text-white">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium leading-6"
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="block px-4 py-2 w-full rounded-md border-0 py-1. shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    {/* Payment Information Section */}

                    <fieldset className="border border-gray-300 rounded-lg p-4">
                      <legend className="font-bold">Payment type</legend>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 ">
                          <Field
                            id="credit-card"
                            name="payment-type"
                            type="radio"
                            value="credit-card"
                            className="form-radio rounded-full"
                          />
                          <label htmlFor="credit-card" className="">
                            Credit card
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Field
                            id="credit-card"
                            name="payment-type"
                            type="radio"
                            value="credit-card"
                            className="form-radio rounded-full"
                          />
                          <label htmlFor="Debit-card" className="">
                            Debit card
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Field
                            id="Visa-card"
                            name="payment-type"
                            type="radio"
                            value="Visa-card"
                            className="form-radio rounded-full"
                          />
                          <label htmlFor="Visa-card" className="">
                            Visa card
                          </label>
                        </div>
                        <ErrorMessage
                          name="payment-type"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </fieldset>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="card-number" className="font-bold ">
                          Card number
                        </label>
                        <Field
                          type="text"
                          id="card-number"
                          name="card-number"
                          autoComplete="cc-number"
                          className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-500  focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                        />
                        <ErrorMessage
                          name="card-number"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cvc" className="font-bold ">
                          CVV
                        </label>
                        <Field
                          type="text"
                          id="cvc"
                          name="cvc"
                          autoComplete="cvc-number"
                          className="border border-gray-300 rounded-lg p-2 w-full focus:border-indigo-500  focus:ring focus:ring-indigo-600 focus:ring-opacity-50"
                        />
                        <ErrorMessage
                          name="cvc"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      disabled={isSubmitting}
                      onClick={handle_complete_Order}
                    >
                      {isSubmitting ? "Submitting..." : "Complete Order"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
