import React from 'react';
import Proptypes from 'prop-types';

let DeleteFormComponent =  (props) =>{

    return(

        <div>
            <form className="form" onSubmit={props.onFormSubmit}>
                <div className="form-group">
                    <label>City: </label>
                    <input className="form-control" value={props.name} onChange={props.onNameChange}></input>
                    <button className="btn btn-primary" type="submit">Delete</button>
                </div>
            </form>
        </div>
    )

    
}

DeleteFormComponent.propTypes = {

    name: Proptypes.string.isRequired,
    onNameChange: Proptypes.func.isRequired,
    onFormSubmit: Proptypes.func.isRequired
}

export default DeleteFormComponent;