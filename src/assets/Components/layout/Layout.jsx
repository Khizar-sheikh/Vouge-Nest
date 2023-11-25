import React from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "../Footer/Footer";
import { FloatButton } from "antd";
import { CartProvider } from "../context/CartContext";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
     <CartProvider>
     <div className="content">{children}</div>
     </CartProvider>
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
}

export default Layout;
