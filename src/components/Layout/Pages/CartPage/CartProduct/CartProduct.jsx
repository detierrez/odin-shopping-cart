import styles from "./CartProduct.module.css";

export default function CartProduct({ children = {} }) {
  const { img, title, price, input } = children;
  return (
    <div className={styles.card}>
      <div className={styles["card_img"]}>{img}</div>
      <div className={styles["card_title"]}>{title}</div>
      <div className={styles["card_input"]}>{input}</div>
      <div className={styles["card_price"]}>${price}</div>
    </div>
  );
}
