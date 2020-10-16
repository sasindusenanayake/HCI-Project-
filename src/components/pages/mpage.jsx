import React, { Component } from 'react' 
import Image from '../../asserts/gatesiamges/driveawaygate.jpg'
import Image2 from '../../asserts/gatesiamges/gardengate.jpg'
import Image3 from '../../asserts/gatesiamges/fence.jpg'
import Image4 from '../../asserts/gatesiamges/rollergate.jpg'
import Image5 from '../../asserts/gatesiamges/remote.jpg'
import Image6 from '../../asserts/gatesiamges/recever.jpg'


export default class driveawayimages extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Driveaway Gates</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image2} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Garden Gates</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image3} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Fence</a>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Roller Gates</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image5} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    
                                    <a href="#" class="btn btn-primary">Gates Remote</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{width: 18+'rem'}}>
                                <img src={Image6} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                   
                                    <a href="#" class="btn btn-primary">Gates Recever</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}











