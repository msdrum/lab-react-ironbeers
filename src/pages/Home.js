import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/src/pages/AllBeers.js"}>All Beers</Link>
      <Link to={"/random-beer"}></Link> {/*to randomBeer */}
      <Link to={"/new-beer"}></Link> {/*to newBeer */}
    </div>
  );
}

export default Home;
