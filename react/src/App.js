import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, withRouter, Route} from "react-router-dom";


import CCAddIngredient from './ClassComponent/CCAddIngredient';
import CCAddRecipe from './ClassComponent/CCAddRecipe';
import CCHome from './ClassComponent/CCHome';
import FCHeader from './FunctionalComponents/FCHeader';


function App() {
  return (
    <div className="App">
      
      <FCHeader/>
      <Switch>
          <Route exact path="/" >
            <CCHome/>
          </Route>
          <Route path="/AddIngredient">
            <CCAddIngredient/>
          </Route>
          <Route path="/AddRecipe" >
            <CCAddRecipe/>
          </Route>
        </Switch>
    </div>
  );
}
export default withRouter(App);
