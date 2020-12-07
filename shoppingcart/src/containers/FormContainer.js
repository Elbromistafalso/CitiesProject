import React from 'react';
import FormComponent from '../components/FormComponent';

class FormContainer extends React.Component{

    constructor(){

        super();
        this.state = {

            name : "",
            imageUrl: "",
            country: "",
            cityP: "",
            metroP: "",
            density: "",
            wikiUrl: ""
        }
    }

    handleChangeName = (e) => {

        e.preventDefault();

        this.setState({name: e.target.value})
    }

    handleChangeImageUrl = (e) => {

        e.preventDefault();

        this.setState({imageUrl: e.target.value})
    }

    handleChangeCountry = (e) => {

        e.preventDefault();

        this.setState({country: e.target.value})
    }

    handleChangeCityP = (e) => {

        e.preventDefault();

        this.setState({cityP: e.target.value})
    }

    handleChangeMetroP= (e) => {

        e.preventDefault();

        this.setState({metroP: e.target.value})
    }

    handleChangeDensity = (e) => {

        e.preventDefault();

        this.setState({density: e.target.value})
    }

    handleChangeWikiUrl = (e) => {

        e.preventDefault();

        this.setState({wikiUrl: e.target.value})
    }

    handleSubmit = (e) => {

        e.preventDefault();
        let cityCard = {

            image : this.state.imageUrl,
            cityName: this.state.name,
            countryName: this.state.country,
            cityPopulation: this.state.cityP,
            metroPopulation: this.state.metroP,
            density: this.state.density,
            wikipedia: this.state.wikiUrl
        };

        let object = JSON.stringify(cityCard, null, 2);
        let fs = require('fs');
        fs.readFile('cities.json', (err,data) => {

            let json = JSON.parse(data);
            json.push(object);
            fs.writeFile('cities.json', JSON.stringify(json));

        })


    }

    render(){

        return(

            <div className="row">
            
            <FormComponent

            name={this.state.name}
            country={this.state.country}
            imgUrl ={this.state.imageUrl}
            cityP ={this.state.cityP}
            metroP={this.state.metroP}
            density={this.state.density}
            wikiUrl={this.state.wikiUrl}
            onFormSubmit={this.handleSubmit}
            onNameChange={this.handleChangeName}
            onCountryChange={this.handleChangeCountry}
            onImageUrlChange={this.handleChangeImageUrl}
            onCityPChange={this.handleChangeCityP}
            onMetroPChange={this.handleChangeMetroP}
            onDensityChange={this.handleChangeDensity}
            onWikiChange={this.handleChangeWikiUrl}            
            />

            </div>
        )



    }

}

export default FormContainer