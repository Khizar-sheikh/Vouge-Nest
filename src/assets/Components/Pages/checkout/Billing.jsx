function Billing() {
  return (
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
            <label htmlFor="card-number" className="font-bold text-gray-700">
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
            <label htmlFor="name-on-card" className="font-bold text-gray-700">
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
        </div>
      </div>
    </div>
  );
}

export default Billing;
