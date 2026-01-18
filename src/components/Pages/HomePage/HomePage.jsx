import { Link } from "react-router";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Hello Words</h1>
      <Link to="shop">Start shopping</Link>
    </div>
  );
}
