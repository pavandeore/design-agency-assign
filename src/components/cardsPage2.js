import React from 'react'

import pen from '../assets/pen.png';
import terminal from '../assets/terminal.png';
import write from '../assets/write.png';

function cardsPage2() {
    return (
        <div className="cardPage2-bg my-3">
            <div className="container">
                <div className="row mx-5">
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap">
                        <div className=" d-flex align-items-center justify-content-center">
                            <div className=" border p-2 m-2 py-4 px-4">
                                <img src={terminal} className="" />
                                <h5 className="my-2">Development</h5>
                                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div>
                            <div className=" border p-2 m-2 py-4 px-4">
                                <img src={pen} className="" />
                                <h5 className="my-2">Design</h5>
                                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit.</p>
                            </div>
                            <div className=" border p-2 m-2 mt-3 py-4 px-4">
                                <img src={write} className="" />
                                <h5 className="my-2">Branding</h5>
                                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 my-5 d-flex justify-content-center flex-column">
                       
                            <p className="custom-color-blue">Our Solutions</p>
                            <h2>What we do</h2>
                            <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit. Vestibulum eget feugiat augue.</p>
                            <button className="btn btn-outline-primary w-50 px-4 circle-20 mt-4">More Details</button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardsPage2
