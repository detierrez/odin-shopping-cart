import styles from "./CartPage.module.css";
import cardStyles from "../../Card/Card.module.css";
import { Link, useOutletContext } from "react-router";
import QuantityInput from "../../QuantityInput/QuantityInput";
import trashIcon from "../../../assets/icons/trash.svg";
import CartProductCard from "../../Card/CartProductCard/CartProductCard";

export default function CartPage() {
  const { products, isLoading, cart, updateCart } = useOutletContext();
  let content;
  if (isLoading) {
    content = <h1>Loading</h1>;
  } else if (Object.keys(cart).length === 0) {
    content = (
      <>
        <img src="/empty-cart.png" alt="asd" />
        <h2>Your cart is empty!</h2>
        <Link to="/shop">Go shop something</Link>
      </>
    );
  } else {
    const total = Object.entries(cart).reduce(
      (sum, [id, qty]) => sum + products[id].price * qty,
      0,
    ).toFixed(2);

    const cartItems = Object.entries(cart).map(([id, qty]) => {
      return (
        <CartProductCard className={styles["bottom-bordered"]} key={id}>
          {{
            img: <img src={products[id].image} alt="" />,
            title: products[id].title,
            price: (products[id].price * qty).toFixed(2),
            input: <QuantityInput id={id} quantity={qty ?? 0} />,
          }}
        </CartProductCard>
      );
    });

    content = (
      <>
        <Link to="/shop"> Back to shop</Link>
        <div className={styles["checkout-layout"] + " " + cardStyles.card}>
          {cartItems}
          <div className={`page ${styles["checkout-total-label"]}`}>Total:</div>
          <div className={`page ${styles["checkout-total-number"]}`}>
            ${total}
          </div>
          <button type="button" className={`page ${styles["checkout-button"]}`}>
            Checkout ✓
          </button>
        </div>
      </>
    );
  }

  return <div className={`page ${styles.page}`}>{content}</div>;
}
