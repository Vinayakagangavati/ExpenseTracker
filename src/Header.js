import { Link } from "react-router-dom";
import "./App.css";
function Header() {
  return (
    <>
      <div>
        <ul className="navbarlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
