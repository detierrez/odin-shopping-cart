import styles from "./CartList.module.css";

export default function CartList({ total, children }) {
  return (
    <div className={styles["checkout-layout"] + " " + styles.card}>
      {children}
      <div className={`page ${styles["checkout-total-label"]}`}>Total: </div>
      <div className={`page ${styles["checkout-total-number"]}`}>${total}</div>
      <button type="button" className={`page ${styles["checkout-button"]}`}>
        Checkout ✓
      </button>
    </div>
  );
}
