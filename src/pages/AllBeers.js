import { Link } from "react-router-dom";

function AllBeers() {
  return (
    <div>
      {/* <h1>All Beers</h1> */}
      <Link to={"/src/pages/Home.js"}>Home</Link>
    </div>
  );
}

export default AllBeers;
