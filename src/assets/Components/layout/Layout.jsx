import Navbar from "./../navbar/Navbar";
import Footer from "../Footer/Footer";
import { FloatButton } from "antd";
import { CartProvider } from "../context/CartContext";
import PropTypes from 'prop-types';

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
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
