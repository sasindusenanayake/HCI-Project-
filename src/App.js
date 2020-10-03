import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from'./components/footer/footer';
import Header from './components/Header/header'
import Driveaway from './components/pages/driveawaygates'
import Moderndriveaway from './components/pages/moderngates'
import Cart from './components/pages/cart'
import Contact from './components/pages/contactus'
import {
    BrowserRouter as Router,
    Switch,
    Route
}from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Router>
        <Switch>
          <Route path="/drivawaygates"><Driveaway></Driveaway></Route>
          <Route path="/cart"><Cart></Cart></Route>
          <Route path="/contactus"><Contact></Contact></Route>
          <Route path="/moderndrivawaygates"><Moderndriveaway></Moderndriveaway></Route>
        </Switch>
      </Router>
    <Footer></Footer>  
    </div>
  );
}

export default App;
