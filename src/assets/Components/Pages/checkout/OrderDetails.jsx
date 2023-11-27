import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import getImagePath from "./../Components/ProductDetails/Imagepath";

function OrderDetails() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const DeliveryCharges = 5;
  const totalPriceWithDelivery = totalPrice + DeliveryCharges;

  return (
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
                <p className="text-sm text-gray-600">Qty {product.quantity}</p>
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
  );
}

export default OrderDetails;
