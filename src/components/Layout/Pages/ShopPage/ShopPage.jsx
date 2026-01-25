import c from "./ShopPage.module.css";
import Product from "./Product/Product";
import QuantityInput from "../../../QuantityInput/QuantityInput";
import StarRating from "../../../StarRating/StarRating";
import upperCaseFirst from "../../../../utils/upperCaseFirst";
import { useState } from "react";
import { useOutletContext } from "react-router";
import Dropdown from "../../../Dropdown/Dropdown";

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
  const [sorting, setSorting] = useState("Featured");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const sortedProducts = filteredProducts.toSorted(sortFunctions[sorting]);

  if (isLoading) return <h1>Loading items</h1>;

  return (
    <div className={c.page}>
      <div className={c.controls}>
        <Dropdown label={"Categories"}>
          {categories.map((category) => (
            <div key={category} onClick={() => setCategory(category)}>
              {upperCaseFirst(category)}
            </div>
          ))}
        </Dropdown>
        <Dropdown label={"Sort"}>
          {Object.keys(sortFunctions).map((sorting) => (
            <div key={sorting} onClick={() => setSorting(sorting)}>
              {sorting}
            </div>
          ))}
        </Dropdown>
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
