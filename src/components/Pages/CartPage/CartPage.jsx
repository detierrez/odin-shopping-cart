import styles from "./CartPage.module.css";
import { Link, useOutletContext } from "react-router";
import QuantityInput from "../../QuantityInput/QuantityInput";
import trashIcon from "../../../assets/icons/trash.svg";

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
    content = (
      <>
        {Object.entries(cart).map(([id, qty]) => {
          return (
            <div className={styles.card} key={id}>
              <img src={products[id].image} alt="" />
              <span>{products[id].title}</span>
              <QuantityInput id={id} quantity={qty ?? 0} />
              <button type="button" onClick={() => updateCart(id, 0)}>
                <img src={trashIcon} alt="remove" />
              </button>
            </div>
          );
        })}
        <button type="button">Checkout</button>
      </>
    );
  }

  return <div className={`page ${styles.page}`}>{content}</div>;
}
