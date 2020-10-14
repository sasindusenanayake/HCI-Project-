import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from'./components/footer/footer';
import Header from './components/Header/header'
import Driveaway from './components/pages/driveawaygates'
import Receivers from './components/pages/receivers'
import Moderndriveaway from './components/pages/moderngates'
import Cart from './components/pages/cart'
import FAQ from './components/pages/faq'
import OurPolicies from './components/pages/ourPolicies'





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
          <Route path="/receivers"><Receivers></Receivers></Route>
          <Route path="/faq"><FAQ></FAQ></Route>
          <Route path="/ourPolicies"><OurPolicies></OurPolicies></Route>
          <Route path="/drivawaygates"><Driveaway></Driveaway></Route>
          <Route path="/cart"><Cart></Cart></Route>
          <Route path="/moderndrivawaygates"><Moderndriveaway></Moderndriveaway></Route>
        </Switch>
      </Router>
    <Footer></Footer>  
    </div>
  );
}

export default App;
