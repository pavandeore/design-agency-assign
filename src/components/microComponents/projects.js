import React from 'react'

import pawan from '../../assets/pawan-small.jpg';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';

function projects() {
    return (
            <div className="container">
                    <div className="custom-color-blue ml-4"><b>Project</b></div>
                    <div className="d-flex  justify-content-around">
                        
                        
                            <div className="d-flex">
                                <h2 className="mr-5 text-left">Some Of Our Projects</h2>
                                <div className=" ml-5 arrow-div-2 ml-5">
                                    <a className="carousel-control-prev-1 mr-4" href="#carouselExampleControls2" role="button" data-slide="prev">
                                        <img src={leftArrow} alt="arrow left" className="left-arrow" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next-1 mr-4" href="#carouselExampleControls2" role="button" data-slide="next">
                                        <img src={rightArrow} alt="arrow right" className="right-arrow" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <button className="btn btn-outline-primary circle-20">View All</button>
                            </div>
                            
                        
                    </div>
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="card col-12 col-md-6 col-lg-3 ">
                                <img className="card-img w-100" src={pawan} alt="Card image" />
                                <div className="card-body">
                                <h4 className="card-title">Some Project</h4>
                                <div className="card-text">Some example text some example text. Some Project is an architect and engineer</div>
                                <a href="#" className="btn btn-primary my-2">See Project</a>
                                </div>
                                
                            </div>
                            <div className="card col-12 col-md-6 col-lg-3 ">
                                <img className="card-img w-100" src={pawan} alt="Card image" />
                                <div className="card-body">
                                <h4 className="card-title">Some Project</h4>
                                <div className="card-text">Some example text some example text. Some Project is an architect and engineer</div>
                                <a href="#" className="btn btn-primary my-2">See Project</a>
                                </div>
                            </div>
                            <div className="card col-12 col-md-6 col-lg-3 ">
                                <img className="card-img w-100" src={pawan} alt="Card image" />
                                <div className="card-body">
                                <h4 className="card-title">Some Project</h4>
                                <div className="card-text">Some example text some example text. Some Project is an architect and engineer</div>
                                <a href="#" className="btn btn-primary my-2">See Project</a>
                                </div>
                            </div>
                            <div className="card col-12 col-md-6 col-lg-3 ">
                                <img className="card-img w-100" src={pawan} alt="Card image" />
                                <div className="card-body">
                                <h4 className="card-title">Some Project</h4>
                                <div className="card-text">Some example text some example text. Some Project is an architect and engineer</div>
                                <a href="#" className="btn btn-primary my-2">See Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default projects
