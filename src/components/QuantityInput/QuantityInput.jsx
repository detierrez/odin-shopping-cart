import styles from "./QuantityInput.module.css";
import { useOutletContext } from "react-router";

export default function QuantityInput({ id, quantity, isAccentuated }) {
  const { updateCart } = useOutletContext();
  const className = `${styles["quantity-input"]} ${isAccentuated ? styles.accentuated : ""}`;
  return (
    <span className={className}>
      <button type="button" onClick={() => updateCart(id, quantity - 1)}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => updateCart(id, Number(e.target.value))}
      />
      <button type="button" onClick={() => updateCart(id, quantity + 1)}>
        +
      </button>
    </span>
  );
}
