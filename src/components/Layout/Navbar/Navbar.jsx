import { Link } from "react-router";
import styles from "./Navbar.module.css";
import ShoppingBag from "../../ShoppingBag/ShoppingBag";

function Navbar({ isTransparent, totalItems }) {
  const className = `${styles.navbar} ${isTransparent && styles.transparent}`;
  return (
    <nav className={className}>
      <Link to="/">LOGO</Link>

      {!isTransparent && (
        <Link to="cart">
          <ShoppingBag count={totalItems} />
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
