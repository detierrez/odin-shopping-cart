import { Link, useOutletContext } from "react-router";
import QuantityInput from "../../QuantityInput/QuantityInput";

export default function CartPage() {
  const { products, isLoading, cart, updateCart } = useOutletContext();

  if (isLoading) return <h1>Loading</h1>;

  if (Object.keys(cart).length === 0) {
    return (
      <div>
        <h1>Your cart is empty!</h1>
        <Link to="/shop">Go shop something</Link>
      </div>
    );
  }

  return (
    <div>
      {Object.entries(cart).map(([id, qty]) => {
        return (
          <div key={id}>
            Item:{products[id].title}
            <QuantityInput id={id} quantity={qty ?? 0} />
            <button type="button" onClick={() => updateCart(id, 0)}>
              Trash
            </button>
          </div>
        );
      })}
      <button type="button">Checkout</button>
    </div>
  );
}
