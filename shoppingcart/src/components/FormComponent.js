import React from 'react';
import Proptypes from 'prop-types';

let FormComponent = (props) => {

    return(

        <div>
            <form className="form">
                <div className="form-group">
                    <label>Name: </label>
                    <input className="form-control" value={props.name} onChange={props.onNameChange}></input>
                </div>
                <div className="form-group">
                    <label>Country: </label>
                    <input className="form-control" value={props.country} onChange={props.onCountryChange}></input>
                </div>
                <div className="form-group">
                    <label>Image Url: </label>
                    <input className="form-control" value={props.imgUrl} onChange={props.onImageUrlChange}></input>
                </div>
                <div className="form-group">
                    <label>City population: </label>
                    <input className="form-control" value={props.cityP} onChange={props.onCityPChange}></input>
                </div>
                <div className="form-group">
                    <label>Metro population: </label>
                    <input className="form-control" value={props.metroP} onChange={props.onMetroPChange}></input>
                </div>
                <div className="form-group">
                    <label>Density per km2: </label>
                    <input className="form-control" value={props.density} onChange={props.onDensityChange}></input>
                </div>
                <div className="form-group">
                    <label>Wikipedia Url: </label>
                    <input className="form-control" value={props.wikiUrl} onChange={props.onWikiChange}></input>
                </div>
            <button className="btn" onClick={props.onSaveSubmit}>Save</button>
            <button className="btn" onClick={props.onUpdateSubmit}>Update</button>
            </form>
        </div>
    )

}

FormComponent.propTypes = {

    name: Proptypes.string.isRequired,
    country: Proptypes.string.isRequired,
    imgUrl: Proptypes.string.isRequired,
    cityP: Proptypes.string.isRequired,
    metroP: Proptypes.string.isRequired,
    density: Proptypes.string.isRequired,
    wikiUrl: Proptypes.string.isRequired,

    onSaveSubmit: Proptypes.func.isRequired,
    onUpdateSubmit: Proptypes.func.isRequired,
    onNameChange: Proptypes.func.isRequired,
    onCountryChange: Proptypes.func.isRequired,
    onImageUrlChange: Proptypes.func.isRequired,
    onCityPChange: Proptypes.func.isRequired,
    onMetroPChange: Proptypes.func.isRequired,
    onDensityChange: Proptypes.func.isRequired,
    onWikiChange: Proptypes.func.isRequired

}

export default FormComponent