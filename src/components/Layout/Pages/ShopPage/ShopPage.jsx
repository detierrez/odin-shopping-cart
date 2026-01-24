import c from "./ShopPage.module.css";
import Product from "./Product/Product";
import QuantityInput from "../../../QuantityInput/QuantityInput";
import StarRating from "../../../StarRating/StarRating";
import upperCaseFirst from "../../../../utils/upperCaseFirst";
import { useState } from "react";
import { useOutletContext } from "react-router";

const categories = [
  "all",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

const sortFunctions = {
  ["Featured"]: undefined,
  ["Price: Low to High"]: (pA, pB) => pA.price - pB.price,
  ["Price: High to Low"]: (pA, pB) => pB.price - pA.price,
  ["Reviews"]: (pA, pB) => pB.rating.rate - pA.rating.rate,
};

export default function ShopPage() {
  const { products, isLoading, cart } = useOutletContext();
  const [category, setCategory] = useState("all");
  const [sortingFn, setSortingFn] = useState(() => sortFunctions.featured);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const sortedProducts = filteredProducts.toSorted(sortingFn);

  if (isLoading) return <h1>Loading items</h1>;

  return (
    <div className={c.page}>
      <div className={c.controls}>
        <span className={c.noWrap}>
          Categories:{" "}
          <select
            name="categories"
            id="categories"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {upperCaseFirst(category)}
              </option>
            ))}
          </select>
        </span>{" "}
        <span className={c.noWrap}>
          Filter:{" "}
          <select
            name="filter"
            id="filter"
            onChange={(e) => setSortingFn(() => sortFunctions[e.target.value])}
          >
            {Object.entries(sortFunctions).map(([key, fn]) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className={`${c.productsContainer}`}>
        {sortedProducts.map((product) => (
          <Product key={product.id}>
            {{
              img: <img src={product.image} alt="" />,
              title: product.title,
              price: product.price,
              rate: <StarRating rating={product.rating.rate} />,
              reviewCount: product.rating.count,
              input: (
                <QuantityInput
                  id={product.id}
                  quantity={cart[product.id] ?? 0}
                  isAccentuated
                />
              ),
            }}
          </Product>
        ))}
      </div>
    </div>
  );
}
