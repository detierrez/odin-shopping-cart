import styles from "./Card.module.css";

export default function Card({ isAccentuated = false, children }) {
  return (
    <div
      className={`card ${styles.card} ${isAccentuated ? styles.accentuated : ""}`}
    >
      {children}
    </div>
  );
}
