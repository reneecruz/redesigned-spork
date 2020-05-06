import React, { useState, useEffect } from 'react';
// import Place from './Place.js';
// import SearchBar from './SearchBar.js';
// import { render } from '@testing-library/react';


const Places = () => {

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // const [inputValue, setInputValue] = useState("");


useEffect(() => {
    setLoading(true);
    async function fetchData() {
      // You can await here
      const response = await fetch('https://hidden-anchorage-29107.herokuapp.com/places');
      // ...
      const data = await response.json();
      setPlaces(data);
      setLoading(false);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  
  // const placesList = places.map(
  //   (place, id) => 
  //           <>
  //           {/* <Place key={place.id} {...place} /> */}
  //           <img src={place.img} alt={place.name} height="777" width="777" />
  //           <figcaption>{place.img_credit}</figcaption>
  //           <h2>{place.name}</h2>
  //           <h3>{place.location}</h3>
  //           <h4>{place.description}</h4>
  //           <li key={place.id}>Latitude: {place.lat} Longitude: {place.lng} Url: <a href={`https://atlasobscura.com/places/${place.id}`} class="btn cta bg"target="blank">Atlas Obscura Entry</a>
  //           </li>
  //           </>
  // );  
      useEffect(() => {
      return function logWillUnmount() {
        console.log("Unmounting place component");
      };
    }, []);

    useEffect(() => {
      setFilteredPlaces(
        places.filter( place => {
          return place.name.toLowerCase().includes( search.toLowerCase() ) || place.location.toLowerCase().includes( search.toLowerCase() )
        }))
    }, [search, places]);

    if (loading) {
      return <p> Loading Obscura Places...</p>;
    };

  return (

    <>
    <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value)}/>
    {/* <SearchBar places={places} /> */}
    <ul>
    {/* {placesList === null || placesList === undefined ? console.log("loading") : placesList} */}

      {filteredPlaces.map((place, id ) => (
        <>
        <img src={place.img} alt={place.name} height="777" width="777" />
        <figcaption>{place.img_credit}</figcaption>
        <h2>{place.name}</h2>
        <h3>{place.location}</h3>
        <h4>{place.description}</h4>
        <li key={place.id}>Latitude: {place.lat} Longitude: {place.lng} Url: <a href={`https://atlasobscura.com/places/${place.id}`} class="btn cta bg"target="blank">Atlas Obscura Entry</a>
        </li>
        </>
      ))}
    </ul>
    </>
  );
}

export default Places;