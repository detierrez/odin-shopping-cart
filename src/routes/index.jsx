import App from "../components/App/App";
import HomePage from "../components/Pages/HomePage/HomePage";
  import ShopPage from "../components/Pages/ShopPage/ShopPage";
  import CartPage from "../components/Pages/CartPage/CartPage";


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
