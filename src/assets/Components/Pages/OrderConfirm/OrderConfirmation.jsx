import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

function OrderConfirmation() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto py-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-5xl font-bold text-center mb-8 text-blue-600">
              Your Order Has Been Placed!
            </h1>
            <p className="text-2xl text-center mb-10">
              Thank you for shopping with us!
            </p>

            <div className="flex justify-center">
              <Link
                to="/order"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Check Your Order Information
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Want to continue shopping?</p>
              <Link
                to="/"
                className="inline-block border border-gray-700 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default OrderConfirmation;
