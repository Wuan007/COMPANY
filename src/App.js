import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/utility/Navbar';
import Backpacks from "./components/Backpacks";
import Accessories from "./components/Accessories";
import Video from "./components/Video";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Backpack1 from "./components/Backpack1";
import Backpack from "./components/Backpack";
import Cart from "./components/Cart";
export default function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/backpacks" component={Backpacks} />
        <Route exact path="/Accessories" component={Accessories} /> 
        <Route exact path="/Videos" component={Video} />
        <Route exact path="/Register" component={Register} /> 
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Backpack1" component={Backpack1} />
        <Route exact path="/backpack/:id" component={Backpack} /> 
        <Route exact path="/Cart/:id" component={Cart} /> 
      </Switch>
    </Router>
  );
}


