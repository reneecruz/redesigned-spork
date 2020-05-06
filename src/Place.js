import React, { useState, useEffect } from 'react';

const Place = (props) => {

    return (
        <>
        <h1>Hello from Place Component</h1>
        <img src={place.img} alt={place.name} height="777" width="777" />
            <figcaption>{place.img_credit}</figcaption>
            <h2>{place.name}</h2>
            <h3>{place.location}</h3>
            <h4>{place.description}</h4>
            <li>Latitude: {place.lat} Longitude: {place.lng} Url: <a href={`https://atlasobscura.com/places/${place.id}`} class="btn cta bg"target="blank">Atlas Obscura Entry</a>
            </li>
        </>
    )

}

export default Place;