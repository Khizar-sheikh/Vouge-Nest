import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [completedOrder, setCompletedOrder] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []); // This fetches items from local storage only once when component mount

  function updateLocalCart(carts) {
    localStorage.setItem("cartItems", JSON.stringify(carts));
  }

  const addToCart = (item) => {
    const existingProductIndex = cartItems.findIndex(
      (product) => product.id === item.id
    );
    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }
    console.log(cartItems);
    setCartItems(updatedCart);
    updateLocalCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    updateLocalCart(updatedCart);
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    newQuantity = Math.max(newQuantity, 1);

    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    updateLocalCart(updatedCart);
  };

  const updateItemSize = (itemId, newSize) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, size: newSize };
      }
      return item;
    });
    setCartItems(updatedCart);
    updateLocalCart(updatedCart);
  };
  const orderComplete = () => {
    // Create a copy of the current cart items to add to completed orders
    const currentCartItems = [...cartItems];

    // Add current cartItems to completedOrders array
    setCompletedOrder((prevCompletedOrder) => [
      ...prevCompletedOrder,
      ...currentCartItems,
    ]);

    setCartItems([]); // Clear cartItems after completing the order
    updateLocalCart([]);
  };
  const cartContextValue = {
    cartItems,
    orderComplete,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    updateItemSize,
    completedOrder,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CartContext;
