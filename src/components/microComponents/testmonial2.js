import React from 'react'
import './testmonial2.css'

import pawan from '../../assets/pawan-small.jpg';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';


function Testmonial2() {
    return (
        <div className="container">
            
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex row">
                            <div className="my-5 py-5 col-12 col-md-5 col-lg-4 ">
                                <img src={pawan} className=" w-100 img-thumbnail" alt="Pawan Profile" />
                            </div>
                            <div className="d-flex flex-column p-5 mt-5 col-12 col-md-7 col-lg-8">
                                <div><div className="green"></div><div className="green"></div></div>
                                    <div className="custom-color-gray my-5">This is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum text</div>
                                <div>
                                    <div>
                                        <b>Pawan Deore</b>
                                        <p className="custom-color-gray">CEO at XYZ ltd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex row">
                            <div className="my-5 py-5 col-12 col-md-5 col-lg-4 ">
                                <img src={pawan} className=" w-100 img-thumbnail" alt="Pawan Profile" />
                            </div>
                            <div className="d-flex flex-column p-5 mt-5 col-12 col-md-7 col-lg-8">
                                <div><div className="green"></div><div className="green"></div></div>
                                    <div className="custom-color-gray my-5">This is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum text</div>
                                <div>
                                    <div>
                                        <b>Pawan Deore</b>
                                        <p className="custom-color-gray">CEO at ABC ltd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex row">
                            <div className="my-5 py-5 col-12 col-md-5 col-lg-4 ">
                                <img src={pawan} className=" w-100 img-thumbnail" alt="Pawan Profile" />
                            </div>
                            <div className="d-flex flex-column p-5 mt-5 col-12 col-md-7 col-lg-8">
                                <div><div className="green"></div><div className="green"></div></div>
                                    <div className="custom-color-gray my-5">This is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum text</div>
                                <div>
                                    <div>
                                        <b>Pawan Deore</b>
                                        <p className="custom-color-gray">CEO at LMN ltd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrow-div">
                    <a className="carousel-control-prev-1 mr-4" href="#carouselExampleControls" role="button" data-slide="prev">
                        <img src={leftArrow} alt="arrow left" className="left-arrow" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next-1 mr-4" href="#carouselExampleControls" role="button" data-slide="next">
                        <img src={rightArrow} alt="arrow right" className="right-arrow" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>


        </div>
    )
}

export default Testmonial2