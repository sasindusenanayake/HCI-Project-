import React, { Component } from 'react' 
import Image from '../../asserts/gatesiamges/1.jpg'
import Image2 from '../../asserts/gatesiamges/2.jpg'
import Image3 from '../../asserts/gatesiamges/3.jpg'
import Image4 from '../../asserts/gatesiamges/4.jpg'
import Image5 from '../../asserts/gatesiamges/5.jpg'
import Image6 from '../../asserts/gatesiamges/6.jpg'


export default class privacygatesimages extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                    
                                
                                    <a href="#" class="btn btn-primary">Pacific Tide</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image2} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image3} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image4} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image5} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image6} class="card-img-top" alt="..."/>
                                <a href="#" class="btn btn-primary">Review</a>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}