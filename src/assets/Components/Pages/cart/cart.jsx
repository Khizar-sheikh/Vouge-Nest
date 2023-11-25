import { useState, useEffect, useRef, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import { getImagePath } from "./../Components/ProductDetails/Productdetails";

const BrandName = styled.div`
  font-size: var(--large-font);
  font-weight: bolder;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-shadow: -1px -1px 0 rgb(81, 78, 78), -2px -1px 0 rgb(121, 114, 114),
    -3px -2px 0 rgb(40, 38, 38), 1px 1px 0 black;

  padding: 10px 20px;
  margin-bottom: 20px;

  a {
    margin-left: 20px;
    text-decoration: none;
    font-weight: bolder;
  }
`;

export default function Cart() {
  const { cartItems, removeFromCart, updateItemQuantity } =
    useContext(CartContext);



  const [open, setOpen] = useState(true);
  const cartRef = useRef(null);

  useEffect(() => {
    const closeCart = (event) => {
      if (!cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeCart);

    return () => {
      document.removeEventListener("mousedown", closeCart);
    };
  }, []);
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div
      className={`fixed  inset-0 overflow-hidden bg-gray-500 bg-opacity-75 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 flex justify-end" ref={cartRef}>
        <div className="w-full max-w-md bg-white shadow-xl">
          <div className="px-4 py-6 sm:px-6 h-96 overflow-y-auto">
            <div className="flex items-start justify-between   px-4 py-3 sm:px-6 sticky top-0 bg-white ">
              <h2 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h2>
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8">
              {cartItems.length === 0 ? (
                <div>
                  <p className="text-gray-600 text-2xl  text-center py-12  ">
                    <BrandName>
                      <Link to="/"> VougeNest</Link>
                    </BrandName>
                    There are no items in your cart.
                  </p>
                </div>
              ) : (
                <ul clasdiv sName="divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex justify-around py-6">
                      {/* First Div: Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={getImagePath(product.image, product.category)}
                          alt={product.name}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      {/* Second Div: Product Details */}
                      <div className="flex flex-col items-center justify-between">
                        <div className="text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.attributes.color}</p>
                        </div>

                        <div className="flex items-center">
                          <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                              updateItemQuantity(
                                product.id,
                                product.quantity - 1
                              )
                            }
                          >
                            -
                          </button>
                          <div className="mt-1 text-sm text-gray-500 border p-1 mx-1">
                            <p>Qty {product.quantity}</p>
                          </div>
                          <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                              updateItemQuantity(
                                product.id,
                                product.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Third Div: Price and Remove Button */}
                      <div className="flex flex-col justify-between ml-4">
                        <div className="text-base font-medium text-gray-900">
                          <p>${product.price}</p>
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeFromCart(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity Manipulation Buttons */}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 sticky top-0 bg-white">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/"> Continue Shopping</Link> &rarr;
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
