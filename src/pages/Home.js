import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="links-container">
      <Link to={"/all-beers"}>All Beers</Link>
      <Link to={"/random-beer"}>Random Beer</Link>
      <Link to={"/new-beer"}>New Beer</Link>
    </div>
  );
}

export default Home;
