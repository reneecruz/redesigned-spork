import React, { useState, useEffect } from 'react';
import Place from './Place.js';

const SearchBar = (props) => {

    // const [places, setPlaces] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const filteredPlaces = 
    places.filter(place => {
      return place.name.toLowerCase().includes(inputValue.toLowerCase())
    }) 

    const placeFilterOnChange = (event) => {
      console.log("hi from onChange", event.target.value)
      setInputValue({
        inputValue: event.target.value
      })
    }


    return (
        <>
        <h1>Search</h1>
        <label htmlFor="search">Search by name </label>
        <input type="text" value ={inputValue} onChange={placeFilterOnChange}/>
        <div>
        {
        //    places.map(place => {
               console.log(filteredPlaces())
        //    return <Place place={place} key={place.id} handlePlaceView={props.handlePlaceView}/>
        //    })
        }
        </div>
        </>
    )

}

export default SearchBar;