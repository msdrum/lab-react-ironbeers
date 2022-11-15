import { Link } from "react-router-dom";
import header from "../assets/header-beer-app.png";

function Header() {
  return (
    <div>
      <Link to={"/"}>
        <img src={header} alt="Header" />
      </Link>
    </div>
  );
}

export default Header;
