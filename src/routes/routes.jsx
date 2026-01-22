import App from "../components/App/App";
import HomePage from "../components/Layout/Pages/HomePage/HomePage";
import ShopPage from "../components/Layout/Pages/ShopPage/ShopPage";
import CartPage from "../components/Layout/Pages/CartPage/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

export default routes;
