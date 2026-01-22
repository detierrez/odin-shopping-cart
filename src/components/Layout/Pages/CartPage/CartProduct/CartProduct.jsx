import s from "./CartProduct.module.css";

export default function CartProduct({ children = {} }) {
  const { img, title, price, input } = children;
  return (
    <div className={s.product}>
      <div className={s.productImg}>{img}</div>
      <div className={s.productTitle}>{title}</div>
      <div className={s.productInput}>
        <div className={s.productPrice}>${price}</div>
        {input}
      </div>
    </div>
  );
}
