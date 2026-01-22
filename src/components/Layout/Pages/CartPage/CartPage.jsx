import styles from "./CartPage.module.css";
import { Link, useOutletContext } from "react-router";
import QuantityInput from "../../../QuantityInput/QuantityInput";
import CartProduct from "./CartProduct/CartProduct";
import Empty from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";

export default function CartPage() {
  const { products, isLoading, cart } = useOutletContext();
  let content;
  if (isLoading) {
    content = <h1>Loading</h1>;
  } else if (Object.keys(cart).length === 0) {
    content = <Empty />;
  } else {
    const total = Object.entries(cart)
      .reduce((sum, [id, qty]) => sum + products[id].price * qty, 0)
      .toFixed(2);

    const cartItems = Object.entries(cart).map(([id, qty]) => {
      return (
        <CartProduct className={styles["bottom-bordered"]} key={id}>
          {{
            img: <img src={products[id].image} alt="" />,
            title: products[id].title,
            price: (products[id].price * qty).toFixed(2),
            input: <QuantityInput id={id} quantity={qty ?? 0} />,
          }}
        </CartProduct>
      );
    });

    content = (
      <>
        <Link className={`${styles.flexStart} ${styles.accent}`} to="/shop">
          ← Continue shopping
        </Link>
        <CartList total={total}>{cartItems}</CartList>
      </>
    );
  }

  return <div className={`${styles.page}`}>{content}</div>;
}
