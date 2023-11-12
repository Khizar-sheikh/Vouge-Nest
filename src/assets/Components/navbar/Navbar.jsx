import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ShoppingCartOutlined, MenuOutlined, CloseOutlined } from "@mui/icons-material";
import "./navbar.css"

function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveCategory(null);
    }, 1000);
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
        <div className="brandname">
          <Link className="nav-link brandname" to="/">
            VougeNest
          </Link>
        </div>
        {isMobile && menuOpen || (
          <div className="Navlinks">
            <div
              className="main-category"
              onMouseEnter={() => handleMouseEnter("Mens")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="nav-link">
                <Link to="/mens">Mens</Link>
              </div>
              {activeCategory === "Mens" && (
                <div className="submenu  ">
                  <li>
                    {" "}
                    <Link to="/mens-shirts">Shirts</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/mens-pants">Pants</Link>
                  </li>
                </div>
              )}
            </div>
            <div
              className="main-category"
              onMouseEnter={() => handleMouseEnter("Womens")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="nav-link">
                <Link to="/womens">Womens</Link>
              </div>
              {activeCategory === "Womens" && (
                <div className="submenu ">
                  <li>
                    {" "}
                    <Link to="/womens-dresses">Dresses</Link>
                  </li>{" "}
                  <li>
                    <Link to="/womens-shoes">Shoes</Link>
                  </li>
                  {/* Add more subcategory links as needed */}
                </div>
              )}
            </div>
            <div
              className="main-category"
              onMouseEnter={() => handleMouseEnter("Kids")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="nav-link">
                <Link to="/kids">Kids</Link>
              </div>
              {activeCategory === "Kids" && (
                <div className="submenu ">
                  <li>
                    <Link to="/kids-toys">Toys</Link>
                  </li>
                  <li>
                    <Link to="/kids-clothing">Clothing</Link>
                  </li>
                </div>
              )}
            </div>
            <div className="nav-link">
              <Link to="/order">Order</Link>
            </div>
          </div>
         )}

        <div className="cartAccount icons" style={{ display: "flex" }}>
          <div className="nav-link cart">
            <Link to="/cart">
              <ShoppingCartOutlined style={{ fontSize: 30, color: 'white' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
