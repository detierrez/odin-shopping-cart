import c from "./Product.module.css";

export default function Product({ children = {} }) {
  const { img, title, price, rate, reviewCount, input } = children;

  return (
    <div className={c.product}>
      <div className={c.productImg}>{img}</div>
      <div className={c.productTitle}>{title}</div>
      <div className={c.productPrice}>${price}</div>
      <div className={c.productRate}>{rate}</div>
      <div className={c.productReviewCount}>({reviewCount})</div>
      <div className={c.productInput}>{input}</div>
    </div>
  );
}
