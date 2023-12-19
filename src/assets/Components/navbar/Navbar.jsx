import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./navbar.css";
import Cart from "../Pages/cart/cart";
import CartContext from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cartVisible, setCartVisible] = useState(false); // State for cart visibility

  const { cartItems } = useContext(CartContext);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="navbar">
      <div className={`Navbar flex ${isMobile ? "responsive-navbar" : ""}`}>
        {isMobile && (
          <div className="responsive-menu">
            <div className="icons" onClick={toggleMenu}>
              {menuOpen ? (
                <MenuOutlined style={{ color: "white", marginTop: "10px" }} />
              ) : (
                <CloseOutlined style={{ color: "white", marginTop: "10px" }} />
              )}
            </div>
          </div>
        )}
        <div className="">
          <Link className=" text-xl font-bold lg:text-2xl" to="/">
            Frozen Fryday
          </Link>
        </div>
        {(isMobile && menuOpen) || (
          <div className="Navlinks">
            <div
              className="main-category"
            >
              <div className="nav-link">
                <Link to="/velocity">Kababs</Link>
              </div>
            </div>
            <div
              className="main-category"
            >
              <div className="nav-link">
                <Link to="/velocity">Fried Chicken</Link>
              </div>
            </div>
            <div
              className="main-category"
            >
              <div className="nav-link">
                <Link to="/velocity">Samosa and Faves</Link>
              </div>
            </div>
            <div
              className="main-category"
            >
              <div className="nav-link">
                <Link to="/velocity">Cheese</Link>
              </div>
            </div>
            <div>
              <div className="nav-link">
                <Link to="/order">My Orders</Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex ">
          <div className="nav-link-Account px-4">
            <Link to="/account">
              {" "}
              <UserOutlined style={{ fontSize: "30px" }} />{" "}
            </Link>
          </div>
          <div className="">
            <div className="nav-link cart">
              {/* Toggle Cart visibility on click */}
              <span
                onClick={toggleCart}
                className="cursor-pointer flex items-center"
              >
                <ShoppingCartOutlined
                  style={{
                    color: "white",
                    fontSize: "35px",
                    position: "relative",
                    zIndex: "10",
                  }}
                />

                {/* Display number of items in cart */}
                <span
                  style={{ top: "-10px" }}
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center  "
                >
                  {cartItems.length}
                </span>
              </span>
            </div>

            {/* Render Cart component conditionally based on cart visibility */}
            {cartVisible && <Cart />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
