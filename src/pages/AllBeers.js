import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  // console.log(allBeers);
  const [allBeers, setAllBeers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
    }
    fetchBeers();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  console.log(allBeers);

  return (
    <div className="allBeers-container">
      <Header />

      {allBeers.map((beer) => {
        return (
          <div key={beer._id} className="beer-box">
            <div className="img-box">
              <img
                src={beer.image_url}
                alt={`${beer.name}`}
                style={{ width: 50 }}
              />
            </div>
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
