import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function AllBeers() {
  // console.log(allBeers);
  const [allBeers, setAllBeers] = useState([]);
  // const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(response.data);
      } catch (error) {
        console.error("ALL BEERS -->", error);
      }
    }
    fetchBeers();
  }, []);

  // function handleReload() {
  //   setReload(!reload);
  // }

  // console.log(allBeers);

  return (
    <div className="allBeers-container">
      <Header />

      {allBeers.map((beer) => {
        return (
          <div key={beer._id} className="beer-box">
            <Link to={`/beers/${beer._id}`} className="img-box">
              <img
                src={beer.image_url}
                alt={`${beer.name}`}
                style={{ width: 50 }}
              />
            </Link>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
