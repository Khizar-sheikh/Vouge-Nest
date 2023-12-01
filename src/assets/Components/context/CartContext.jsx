import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [completedOrder, setCompletedOrder] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []); // This fetches items from local storage only once when component mounts

  useEffect(() => {
    // This effect listens for changes in cartItems and updates local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Whenever cartItems change, update local storage

  const addToCart = (item) => {
    const existingProductIndex = cartItems.findIndex(
      (product) => product.id === item.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
  };

  const updateItemSize = (itemId, newSize) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, size: newSize };
      }
      return item;
    });
    setCartItems(updatedCart);
  };
  const orderComplete = () => {
    setCompletedOrder(cartItems);
    setCartItems([]);
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
