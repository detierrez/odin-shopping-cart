import { Outlet, useLocation } from "react-router";
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { products, isLoading } = useProducts();
  const [cart, setCart] = useState({
    1: 2,
    2: 3,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
  });

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  function addToCart(id, quantity) {
    setCart({ ...cart, [id]: (cart[id] || 0) + Number(quantity) });
  }

  function updateCart(id, quantity) {
    const copy = { ...cart };
    if (quantity <= 0) {
      delete copy[id];
    } else {
      copy[id] = Math.min(quantity, 999);
    }

    setCart(copy);
  }

  return (
    <>
      <Navbar isTransparent={isHome} totalItems={totalItems} />
      <Outlet
        context={{ products, isLoading, cart, addToCart, updateCart }}
      ></Outlet>
      {/* <Footer /> */}
    </>
  );
}
