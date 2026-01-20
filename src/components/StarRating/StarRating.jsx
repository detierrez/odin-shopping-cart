import { Fragment } from "react";
import styles from "./StarRating.module.css";

const full = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

const half = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
  </svg>
);

const empty = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
  </svg>
);

export default function StarRating({ rating = 0 }) {
  rating = Math.max(0, Math.min(5, rating));

  const stars = [];
  const integer = Math.floor(rating);
  for (let i = 1; i <= integer; i++) {
    stars.push(<Fragment key={i}>{full}</Fragment>);
  }

  if (integer < 5) {
    const fraction = rating % 1;
    const fractionStar =
      fraction > 0.75 ? full : fraction <= 0.25 ? empty : half;
    stars.push(<Fragment key={integer + 1}>{fractionStar}</Fragment>);
  }

  for (let i = integer + 2; i <= 5; i++) {
    stars.push(<Fragment key={i}>{empty}</Fragment>);
  }

  return <span className={styles.rating}>{stars}</span>;
}
