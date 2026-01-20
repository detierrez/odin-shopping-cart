import styles from "./ShopPage.module.css";
import { useOutletContext } from "react-router";
import QuantityInput from "../../QuantityInput/QuantityInput";
import Card from "../../Card/Card";
import StarRating from "../../StarRating/StarRating";

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
          <Card key={product.id}>
            <div className={styles["img-container"]}>
              <img src={product.image} alt="" />
            </div>
            <div>{product.title}</div>
            <div style={{fontWeight: "bold"}}>${product.price}</div>
            <div>
              <StarRating rating={product.rating.rate} />
              <span style={{ fontSize: "0.8rem" }}>
                ({product.rating.count})
              </span>
            </div>
            <QuantityInput id={product.id} quantity={cart[product.id] ?? 0} />
          </Card>
        ))}
      </div>
    </div>
  );
}
