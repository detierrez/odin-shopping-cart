import { Link } from "react-router";
import styles from "./Navbar.module.css";

function Navbar({ isTransparent, totalItems }) {
  const className = `${styles.navbar} ${isTransparent && styles.transparent}`;
  return (
    <nav className={className}>
      <Link to="/">LOGO</Link>
      {!isTransparent && <Link to="cart">Cart ({totalItems})</Link>}
    </nav>
  );
}

export default Navbar;
