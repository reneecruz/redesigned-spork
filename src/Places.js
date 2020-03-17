import React, { useState, useEffect } from 'react';
// import { render } from '@testing-library/react';


function Places() {

  const [places, setPlaces] = useState([]);


useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('http://localhost:3000/places');
      // ...
      const data = await response.json();
      setPlaces(data)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  
  const placesList = places.map(
    (p, id) => 
            <>
            <img src={"https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzJjNzliZDJkLWMzZDEtNDJkMy04YzRiLWIzZDM1NGRmN2JjNjMwYjVlYWU1YzJhYTI4NTM5M19naG9zdF9yYW5jaF8xLmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/ghost_ranch_4.jpg"} alt={p.lat} height="777" width="777" />
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