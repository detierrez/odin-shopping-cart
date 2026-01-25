import { Link } from "react-router";
import c from "./Navbar.module.css";
import ShoppingBag from "../../ShoppingBag/ShoppingBag";

function Navbar({ isTransparent, totalItems }) {
  const navClass = `${c.navbar} ${isTransparent && c.transparent}`;
  return (
    <nav className={navClass}>
      <div className={`${c.linksContainer}`}>
        <Link to="/" className={c.logo}>
          <img src="/logo.png" alt="" />
          <span>Metro Arch</span>
        </Link>
        {!isTransparent && (
          <Link to="cart">
            <ShoppingBag count={totalItems} />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
