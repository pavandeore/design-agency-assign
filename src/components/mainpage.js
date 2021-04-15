import React from 'react';
import Navbar from './microComponents/navbar';

import svg from '../assets/undrawDummy.svg';

function mainpage() {
    return (
        <div>
            <Navbar />
            <div className="container my-2 py-3">
                <div className="row px-5 mt-5 pt-5 ml-3 my-5 py-5">
                    <div className="col-12 col-md-7 ">
                        <h1>Welcome to the defiantly<br/>human agency.</h1>
                        <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget feugiat augue.
                        Ut bibendum aliquet est, ac volutpat mi blandit sit amet.</p>
                        <div className="mt-5">
                            <button className="btn btn-primary text-white circle-20 px-4">Explore More</button>
                            <button className="btn btn-outline-none ml-3">See Live Demo <i className="custom-color-red fa fa-lg fa-play-circle-o"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={svg} className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainpage
