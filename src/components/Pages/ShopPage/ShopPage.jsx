import { useOutletContext } from "react-router";
import QuantityInput from "../../QuantityInput/QuantityInput";

export default function ShopPage() {
  const { products, isLoading, cart } = useOutletContext();

  if (isLoading) return <h1>Loading items</h1>;

  return (
    <div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div>{product.title}</div>
          <QuantityInput id={product.id} quantity={cart[product.id] ?? 0} />
        </div>
      ))}
    </div>
  );
}
