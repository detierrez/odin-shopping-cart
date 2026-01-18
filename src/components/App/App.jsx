import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { products, isLoading } = useProducts();
  const [cart, setCart] = useState({});

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  function addToCart(id, quantity) {
    setCart({ ...cart, [id]: (cart[id] || 0) + Number(quantity) });
  }

  function updateCart(id, quantity) {
    const copy = { ...cart };
    if (quantity <= 0) {
      delete copy[id];
    } else {
      copy[id] = quantity;
    }

    setCart(copy);
  }

  return (
    <>
      <Navbar isTransparent={isHome} totalItems={totalItems} />
      <Outlet
        context={{ products, isLoading, cart, addToCart, updateCart }}
      ></Outlet>
    </>
  );
}
