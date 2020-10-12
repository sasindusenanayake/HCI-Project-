import React, { Component } from 'react'
import R1 from '../../asserts/rcontrols/r1.png'
import R2 from '../../asserts/rcontrols/r2.png'
import R3 from '../../asserts/rcontrols/r3.png'
import R4 from '../../asserts/rcontrols/r4.png'
import R5 from '../../asserts/rcontrols/r5.png'
import R6 from '../../asserts/rcontrols/r6.png'
import R7 from '../../asserts/rcontrols/r7.png'
import R8 from '../../asserts/rcontrols/r8.png'

export default class rcontrol extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        {/* <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={R1} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Pacific Tide</a>
                                </div>
                            </div>
                        </div> */}
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R1} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 301</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R2} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 302</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R3} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Multi-Code 303</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 304</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 305</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 306</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Multi-Code 307</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 15+'rem'}}>
                                <img src={R5} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Multi-Code 308</a>
                                    <a href="/cart" class="btn btn-primary">buy it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
