import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormContainer from './containers/FormContainer';
import CitiesListContainer from './containers/CitiesListContainer';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
  
    <div className="container">
      
      <BrowserRouter>
        <NavigationComponent>
          <Switch>
            <Route exact path="/"><HomeComponent/></Route>
            <Route path="/cities"><CitiesListContainer/></Route>
            <Route path="/admin"><FormContainer/></Route>
          </Switch>
        </NavigationComponent>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
