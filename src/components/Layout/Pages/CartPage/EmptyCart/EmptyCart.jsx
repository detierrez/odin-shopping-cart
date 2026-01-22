import { Link } from "react-router";
import styles from "./EmptyCart.module.css";

export default function Empty() {
  return (
    <div className={styles.centerColumn}>
      <img className={styles.img} src="/empty-cart.png" alt="asd" />
      <h2>Your cart is empty!</h2>
      <Link to="/shop">Go shop something</Link>
    </div>
  );
}
