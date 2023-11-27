import OrderDetails from "./OrderDetails";
import PersonalInfo from "./PersonalInfo";
import Billing from "./Billing";

function Checkout() {
  return (
    <div className="lg:grid flex flex-col lg:grid-cols-2 items-center  justify-center ">
      <div className="order-1">
        <PersonalInfo />
      </div>
      <div className="order-last lg:order-2 self-center ">
        <OrderDetails />
      </div>
      <div className="order-2 lg:order-last">
        <Billing />
      </div>
    </div>
  );
}

export default Checkout;
