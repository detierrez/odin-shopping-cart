import { Link } from "react-router";
export default function HomePage() {
  return (
    <div className="page">
      <h1>Hello Words</h1>
      <Link to="shop">Start shopping</Link>
    </div>
  );
}
