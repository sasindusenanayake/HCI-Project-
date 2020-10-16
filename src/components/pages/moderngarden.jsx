import React, { Component } from 'react'
import '.././pages/driveawaystyle.css'
import '.././pages/moderngarden.css'
import Cards from'../images/moderngatesimage'

export default class moderngarden extends Component {
    render() {
        return (
            <div>
            <div>

                <div class="row">

                    <div class="col"></div>
                    <div class="col ">
                    <h1 class="text-center">Modern Garden Gates</h1>
                    </div>
                    <div class="col">
                    <div class="search text-right">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button></div>

                       
                        

                    </div>


                </div>
               
                
                
                    
                </div>
            


            <Cards></Cards>
        </div>
            
        )
    }
}