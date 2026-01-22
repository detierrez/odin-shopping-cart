import styles from "./ShopPage.module.css";
import { useOutletContext } from "react-router";
import QuantityInput from "../../../QuantityInput/QuantityInput";
import Card from "../../../Card/Card";
import StarRating from "../../../StarRating/StarRating";
import ShopProduct from "./ShopProduct/ShopProduct";

export default function ShopPage() {
  const { products, isLoading, cart } = useOutletContext();

  if (isLoading) return <h1>Loading items</h1>;

  return (
    <div className={`page ${styles.page}`}>
      <Card isAccentuated={true}>
        <h2>Categories</h2>
        <ul>
          <li>All</li>
          <li>Men's clothing</li>
          <li>Women's clothing</li>
          <li>Jewelry</li>
          <li>Electronics</li>
        </ul>
      </Card>
      <div className={`${styles["cards-container"]}`}>
        {products.map((product) => (
          <ShopProduct key={product.id}>
            {{
              img: <img src={product.image} alt="" />,
              title: product.title,
              price: product.price,
              rate: <StarRating rating={product.rating.rate} />,
              reviewCount: product.rating.count,
              input: (
                <QuantityInput
                  id={product.id}
                  quantity={cart[product.id] ?? 0}
                  isAccentuated
                />
              ),
            }}
          </ShopProduct>
        ))}
      </div>
    </div>
  );
}
