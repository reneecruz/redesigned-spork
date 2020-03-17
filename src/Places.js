import React, { useState, useEffect } from 'react';
// import { render } from '@testing-library/react';


function Places() {

  const [places, setPlaces] = useState([]);


useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('http://localhost:3001/Places');
      // ...
      const data = await response.json();
      setPlaces(data)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  
  const placesList = places.map(
    (p, id) => 
            <>
            <img src={"https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFkMzlmZjBkLTc2OGQtNGZlMi05NzgzLWMzMDU2NDU4MWEyOTUwOWExYzc2MDlhNGUxMWYyNF9QXzIwMjAwMjIzXzE1NDEyNi5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/P_20200223_154126.jpg"} alt={p.lat} height="400" width="400" />

            <li key={id}>Latitude: {p.lat} Longitude: {p.lon}
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