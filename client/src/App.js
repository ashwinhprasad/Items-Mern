import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
//import { Form } from 'reactstrap';


class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
      <AppNavbar />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <ShoppingList />
        </React.Fragment>  
      )}
      />
      <Route exact path="/about" render={props => (
        <React.Fragment>
          <h4 style={{
            "fontFamily":"'Sacramento', cursive",
            "textAlign":"center",
            "width":"40%",
            "marginLeft":"30%",
            "fontSize":"50px",
            "marginTop":"10%",
            "color":"rgba(68, 181, 20,1)",
            "textShadow":"1px 1px 2px black",
            "background":"rgba(255, 202, 59,1)",
            "padding":"60px",
            "borderRadius":"30px",
            "border": "black 2px dotted" 
          }}> A basic Shopping App where you can add items that you want to buy to your list</h4>
        </React.Fragment>  
      )}
      />
      </div>
    </Router>
    
  );
  }
}

export default App;
