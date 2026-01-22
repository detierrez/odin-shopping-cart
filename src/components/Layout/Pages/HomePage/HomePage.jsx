import styles from "./HomePage.module.css";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className={styles.centerColumn}>
      <h1>Hello Words</h1>
      <Link to="shop">Start shopping</Link>
    </div>
  );
}
