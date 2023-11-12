import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./assets/Components/Pages/home/Home";
import Mens from "./assets/Components/Pages/mens/Mens";
import Womens from "./assets/Components/Pages/Womens/Womens";
import Cart from "./assets/Components/Pages/cart/cart";
import Kids from "./assets/Components/Pages/kids/Kids";
import Order from "./assets/Components/Pages/order/Order";
import MyAccount from "./assets/Components/Pages/Account/MyAccount";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
