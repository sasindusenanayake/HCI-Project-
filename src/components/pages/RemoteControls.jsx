import React, { Component } from 'react'
import Rcards from '../images/rcontrol'

export default class RemoteControls extends Component {
    render() {
        return (
            <div  style={{background: 'url( https://cdn.wallpapersafari.com/87/86/QLVyAC.jpg)'}}>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <h1 style={{color: "white"}}>Remote Controls</h1>
                        <Rcards></Rcards>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
