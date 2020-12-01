import React from 'react';
import {Link} from 'react-router-dom';

let NavigationComponent = () => {

return(
    <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">   
            <ul className="nav navbar-nav">
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/cities" >Cities</Link></li>
               <li><Link to="/cities/add" >Add a new city</Link></li>
               <li><Link to="/cities/change" >Change information</Link></li>
           </ul>
          </div>
        </nav>
    </div>
    )
}
export default NavigationComponent
