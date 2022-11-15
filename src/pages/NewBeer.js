import { Link } from "react-router-dom";
import Header from "../components/Header";

function NewBeer() {
  return (
    <div className="newBeer-container">
      <Header />

      <h1>New Beer</h1>

      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default NewBeer;
