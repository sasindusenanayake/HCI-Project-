import React, { Component } from 'react'
import Mcards from '../images/manufactures'

export default class Manufactures extends Component {
    render() {
        return (
            // style={{background: 'url( https://cdn.wallpapersafari.com/64/92/uMUbRo.jpg)' }}
            <div>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <h1>Manufactures</h1>
                        <Mcards></Mcards>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
