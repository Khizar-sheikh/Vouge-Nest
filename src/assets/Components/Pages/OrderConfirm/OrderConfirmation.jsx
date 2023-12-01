import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Your Order Has been Placed </h1>
      <p className="mt-4 text-2xl">Thank you for shopping with us!</p>

      <div className="">
        <p>
          Check Your Order Information
          <Link to="/order">here</Link>
        </p>
      </div>
    </div>
  );
}

export default OrderConfirmation;
