import React from 'react'
import Proptypes from 'prop-types';
import "bootstrap/dist/js/bootstrap.bundle.min";

let CityCardComponent = (props) => {
    return(
        <div className="card">
            <img src={props.image} alt={props.cityName} style={{width:"250px", height:"200px"}}/>
            <div className="card-body">
                <h4 className="card-title">{props.cityName}</h4>
                <p>Country: {props.countryName}</p>
                <p>City population: {props.cityPopulation}</p>
                <p>Metro population: {props.metroPopulation}</p>
                <p>Density per km2: {props.density}</p>
                <a href={props.wikipedia} class="btn btn-primary">See Wikipedia</a>
            </div>
        </div>
    )
}

 CityCardComponent.propTypes = {
     
    image: Proptypes.string.isRequired,
    cityName: Proptypes.string.isRequired,
    countryName: Proptypes.string.isRequired,
    cityPopulation: Proptypes.string.isRequired,
    metroPopulation: Proptypes.string.isRequired,
    density: Proptypes.string.isRequired,
    wikipedia: Proptypes.string.isRequired
 };

export default CityCardComponent