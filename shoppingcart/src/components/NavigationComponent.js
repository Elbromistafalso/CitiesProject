import React from 'react';
import {Link} from 'react-router-dom';

let NavigationComponent = (props) => {

return(

  <div>
    <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">   
            <ul className="nav navbar-nav">
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/cities" >Cities</Link></li>
               <li><Link to="/admin" >Admin</Link></li>
           </ul>
          </div>
        </nav>
    </div>
    {props.children}
  </div>
    )
}
export default NavigationComponent
