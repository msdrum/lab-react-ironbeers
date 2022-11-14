import { Link } from "react-router-dom";
import Header from "../components/Header";

function AllBeers() {
  return (
    <div>
      <Header />

      <h1>All Beers</h1>

      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default AllBeers;
