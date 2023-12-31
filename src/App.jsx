import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./assets/Components/Pages/home/Home";
import Mens from "./assets/Components/Pages/mens/Mens";
import Womens from "./assets/Components/Pages/Womens/Womens";
import Velocity from "./assets/Components/Pages/Velocity/Velocity";
import Cart from "./assets/Components/Pages/cart/cart";
import MyAccount from "./assets/Components/Pages/Account/MyAccount";
import Contact from "./assets/Components/Pages/contact/contact";
import Job from "./assets/Components/Pages/Jobs/job";
import About from "./assets/Components/Pages/About us/About";
import MensTops from "./assets/Components/Pages/mens/MensTops";
import MensBottom from "./assets/Components/Pages/mens/MensBottom";
import WomensOuterwear from "./assets/Components/Pages/Womens/WomensBottom";
import WomensDresses from "./assets/Components/Pages/Womens/WomensTops";
import NotFound from "./NotFound";
import Productdetails from "./assets/Components/Pages/Components/ProductDetails/Productdetails";
import { CartProvider } from "./assets/Components/context/CartContext";
import PersonalInfo from "./assets/Components/Pages/checkout/PersonalInfo";
import Checkout from "./assets/Components/Pages/checkout/Checkout";
import Signuplayout from "./assets/Components/Authentication/signuplayout";
import Signinlayout from "./assets/Components/Authentication/signinlayout";
import OrderConfirmation from "./assets/Components/Pages/OrderConfirm/OrderConfirmation";
import Order from "./assets/Components/Pages/order/Order";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/mens/jackets" element={<MensBottom />} />
            <Route path="/mens/sweatshirts" element={<MensTops />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/womens/Shirts" element={<WomensDresses />} />
            <Route path="/womens/outerwear" element={<WomensOuterwear />} />
            <Route path="/velocity" element={<Velocity />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirm" element={<OrderConfirmation />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Job />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/products/:productId" element={<Productdetails />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/signin" element={<Signinlayout />} />
            <Route path="/signup" element={<Signuplayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
