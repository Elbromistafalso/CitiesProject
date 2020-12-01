import React from 'react';
import Cities from '../cities.json';
import CitiesListComponent from '../components/CitiesListComponent';

// let CitiesListContainer = () => {

//     return(<CitiesListComponent cities={Cities}/>)
// }

class CitiesListContainer extends React.Component{

    constructor(props){

        super(props);
        this.state= {citiesCards: []};
        
    }

    componentDidMount(){

        this.setState({citiesCards : Cities})

    }

    render(){

        return(<CitiesListComponent cities={this.state.citiesCards}/>)
    }
}

export default CitiesListContainer