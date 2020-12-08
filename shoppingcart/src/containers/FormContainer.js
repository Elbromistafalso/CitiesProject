import React from 'react';
import FormComponent from '../components/FormComponent';
import DeleteFormComponent from '../components/DeleteFormComponent';
import axios from 'axios';

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
            wikiUrl: "",
            deleteName: ""
        }
    }

    handleChangeName = (e) => {

        e.preventDefault();

        this.setState({name: e.target.value})
    }

    handleDeleteChangeName = (e) => {

        e.preventDefault();
        this.setState({deleteName: e.target.value})
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

        axios.post("http://localhost:8500/add", cityCard);

        this.setState({name: ""})
        this.setState({imageUrl: ""})
        this.setState({country: ""})
        this.setState({cityP: ""})
        this.setState({metroP: ""})
        this.setState({density: ""})
        this.setState({wikiUrl: ""})
    }
    
        handleDeleteSubmit = (e) => {


            e.preventDefault();
            axios.delete("http://localhost:8500/delete/" + this.state.deleteName);
            this.setState({deleteName: ""})
            
        }

        handleUpdateSubmit = (e) => {

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

            axios.put("http://localhost:8500/update/" + this.state.name, cityCard);

        this.setState({name: ""})
        this.setState({imageUrl: ""})
        this.setState({country: ""})
        this.setState({cityP: ""})
        this.setState({metroP: ""})
        this.setState({density: ""})
        this.setState({wikiUrl: ""})
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
            onSaveSubmit={this.handleSubmit}
            onUpdateSubmit={this.handleUpdateSubmit}
            onNameChange={this.handleChangeName}
            onCountryChange={this.handleChangeCountry}
            onImageUrlChange={this.handleChangeImageUrl}
            onCityPChange={this.handleChangeCityP}
            onMetroPChange={this.handleChangeMetroP}
            onDensityChange={this.handleChangeDensity}
            onWikiChange={this.handleChangeWikiUrl}            
            />

            <DeleteFormComponent
              name={this.state.deleteName}
              onNameChange={this.handleDeleteChangeName}
              onFormSubmit={this.handleDeleteSubmit}/>


            </div>

            

            
        )



    }

}

export default FormContainer