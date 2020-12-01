import React from 'react';
import Proptypes from 'prop-types';
import CityCardComponent from './CityCardComponent';

let CitiesListComponent = (props) => {

    let citiesCards = props.cities.map(city => {

        return(
            <CityCardComponent
            key = {city.cityName}
            image = {city.image}
            cityName = {city.cityName}
            countryName = {city.countryName}
            cityPopulation = {city.cityPopulation}
            metroPopulation = {city.metroPopulation}
            density = {city.density}
            wikipedia = {city.wikipedia}
            />
        )


    });

return (<div className="row">{citiesCards}</div>)

}

CitiesListComponent.propTypes = {

    cities: Proptypes.array.isRequired
}

export default CitiesListComponent