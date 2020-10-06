import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from'./components/footer/footer';
import Header from './components/Header/header'
import Driveaway from './components/pages/driveawaygates'
import Sasindu from './components/pages/test'
import Mpage from './components/pages/mpage'
import Aboutus from './components/pages/aboutus'
import Dapp from './components/pages/dealersapplication'

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
        <Route path="/aboutus"><Aboutus></Aboutus></Route>
        <Route path="/dealersapplication"><Dapp></Dapp></Route>
          <Route path="/test"><Sasindu></Sasindu></Route>
          <Route path="/mpage"><Mpage></Mpage></Route>
          <Route path="/drivawaygates"><Driveaway> </Driveaway></Route> 
          <Route path="/cart"></Route> 
          <Route path="/gates"></Route>
        </Switch>
      </Router>
    <Footer></Footer>  
    </div>
  );
}

export default App;
