import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetails() {
  const { beerId } = useParams();
  console.log(beerId);

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("BEER DETAILS -->", error);
      }
    }
    fetchBeer();
  }, [beerId]);

  // const beerSelected = allBeers.find((beer) => {
  //   return beer._id === beerID;
  // });

  // console.log(beerSelected);

  return (
    <div>
      <Header />
      <div className="beer-detail">
        <img src={beer.image_url} alt={`${beer.name}`} style={{ width: 50 }} />
        <h3>{beer.name}</h3>
        <h4>{beer.tagline}</h4>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
