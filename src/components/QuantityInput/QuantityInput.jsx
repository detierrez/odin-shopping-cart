import styles from "./QuantityInput.module.css";
import { useOutletContext } from "react-router";

export default function QuantityInput({ id, quantity }) {
  const { updateCart } = useOutletContext();
  return (
    <span className={styles["quantity-input"]}>
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
