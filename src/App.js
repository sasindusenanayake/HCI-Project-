import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from'./components/footer/footer';
import Header from './components/Header/header'
import Driveaway from './components/pages/driveawaygates'
import Sasindu from './components/pages/test'
import Hci1 from './components/pages/home';
import {
    BrowserRouter as Router,
    Switch,
    Route
}from 'react-router-dom'   

function App() {
  return (
    <div className="App">
    <Header></Header>
    <br></br>
    <br></br>
    <br></br>
      <Router>
        <Switch>
          <Route path="/test"><Sasindu></Sasindu></Route>
          <Route> path="/home"><Hci1></Hci1></Route>
          <Route path="/drivawaygates"><Driveaway> </Driveaway></Route> 
          <Route path="/cart"></Route> 
          <Route path="/gates"></Route>
        </Switch>
      </Router>
    <br></br>
    <Footer></Footer>  
    </div>
  );
}

export default App;
