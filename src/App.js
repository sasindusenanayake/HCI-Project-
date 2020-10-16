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

import OurPolicies from './components/pages/ourPolicies'
import FAQ from './components/pages/faq'
import Receivers from './components/pages/receivers'

import Moderndriveaway from './components/pages/moderngates'
import Cart from './components/pages/cart'
import Contact from './components/pages/contactus'
import Rcontrol from './components/pages/RemoteControls'
import Manufactures from './components/pages/Manufactures'
import Reviews from './components/pages/review'
import Moderngrd from './components/pages/moderngarden'
import Prigarden from './components/pages/privacygarden'
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
           
          <Route path="/receivers"><Receivers></Receivers></Route>
          <Route path="/faq"><FAQ></FAQ></Route>
          <Route path="/ourPolicies"><OurPolicies></OurPolicies></Route>

          <Route path="/gates"></Route>

          
          <Route path="/gates"></Route>

          
          <Route path="/cart"><Cart></Cart></Route>
          <Route path="/contactus"><Contact></Contact></Route>
          <Route path="/RemoteControls"><Rcontrol></Rcontrol></Route>
          <Route path="/Manufactures"><Manufactures></Manufactures></Route>
          <Route path="/moderndrivawaygates"><Moderndriveaway></Moderndriveaway></Route>
          <Route path="/privacygarden"><Prigarden></Prigarden></Route>
          <Route path="/review"><Reviews></Reviews></Route>
          <Route path="/moderngarden"><Moderngrd></Moderngrd></Route>

        </Switch>
      </Router>
    <Footer></Footer>  
    </div>
  );
}

export default App;
