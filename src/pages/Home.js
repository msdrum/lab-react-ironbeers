import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function Home() {
  return (
    <div className="links-container">
      <div className="beers">
        <Link to={"/beers"}>
          <img src={beers} alt="Beers" />
        </Link>
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
          <br></br>
          Maecenas nondui magna. Morbi bibendum arcu arcu, a rutrum lectus
          Maecenas nondui magna condimentum eget.
          <br></br>
          Praesent efficitur ligula ac magna pharetra aliquam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="random-beer">
        <Link to={"/random-beer"}>
          <img src={randomBeerImg} alt="Random Beers" />
        </Link>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
          <br></br>
          Maecenas nondui magna. Morbi bibendum arcu arcu, a rutrum lectus
          Maecenas nondui magna condimentum eget.
          <br></br>
          Praesent efficitur ligula ac magna pharetra aliquam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="new-beer">
        <Link to={"/new-beer"}>
          <img src={newBeerImg} alt="New Beer" />
        </Link>
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
          <br></br>
          Maecenas nondui magna. Morbi bibendum arcu arcu, a rutrum lectus
          Maecenas nondui magna condimentum eget.
          <br></br>
          Praesent efficitur ligula ac magna pharetra aliquam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default Home;
