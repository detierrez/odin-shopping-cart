import c from "./HomePage.module.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className={c.page}>
      <div className={c.background}></div>
      <h1>Precision design meets urban utility.</h1>
      <h2>Essentials for the modern architect.</h2>
      <Link to="shop">
        <h2>Shop The Drop &gt;</h2>
      </Link>
    </div>
  );
}
