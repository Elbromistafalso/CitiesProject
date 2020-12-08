import React from 'react';
import Cities from '../cities.json';
import CitiesListComponent from '../components/CitiesListComponent';
import axios from 'axios';


// let CitiesListContainer = () => {

//     return(<CitiesListComponent cities={Cities}/>)
// }

class CitiesListContainer extends React.Component{

    constructor(props){

        super(props);
        this.state= {citiesCards: []};
        
    }

    componentDidMount(){

        axios.get("http://localhost:8500/cities")
        .then((respone) => {

            this.setState({citiesCards :respone.data})

        })
        .catch((error) => {

            console.log(error);
        })

        

        

    }

    render(){

        return(<CitiesListComponent cities={this.state.citiesCards}/>)
    }
}

export default CitiesListContainer