import { Link } from "react-router-dom";
import Header from "../components/Header";

function RandomBeer() {
  return (
    <div>
      <Header />

      <h1>Random Beer</h1>

      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default RandomBeer;
