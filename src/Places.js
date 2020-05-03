import React, { useState, useEffect } from 'react';
// import { render } from '@testing-library/react';


function Places() {

  const [places, setPlaces] = useState([]);


useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('https://hidden-anchorage-29107.herokuapp.com/places');
      // ...
      const data = await response.json();
      setPlaces(data)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  
  const placesList = places.map(
    (p, id) => 
            <>
            <img src={p.img} alt={p.name} height="777" width="777" />
            <figcaption>{p.img_credit}</figcaption>
            <h2>{p.name}</h2>
            <h3>{p.location}</h3>
            <h4>{p.description}</h4>
            <li key={id}>Latitude: {p.lat} Longitude: {p.lng} Url: <a href={`https://atlasobscura.com/places/${p.id}`} class="btn cta bg"target="blank">Atlas Obscura Entry</a>
            </li>
            </>
  );  
      useEffect(() => {
      return function logWillUnmount() {
        console.log("Unmounting place component");
      };
    }, []);

  return (


    <ul>
    {placesList === null || placesList === undefined ? console.log("loading") : console.log(placesList)}

      {placesList}
    </ul>
  );
}

export default Places;