import styles from "./CartProductCard.module.css";

export default function CartProductCard({ children = {} }) {
  const { img, title, price, rate, reviewCount, input } = children;
  return (
    <div className={styles.card}>
      <div className={styles["card_img"]}>{img}</div>
      <div className={styles["card_title"]}>{title}</div>
      <div className={styles["card_price"]}>${price}</div>
      <div className={styles["card_input"]}>{input}</div>
    </div>
  );
}
