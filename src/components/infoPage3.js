import React from 'react'
import UndrawGirl from '../assets/undrawGirl.svg';

function infoPage3() {
    return (
        <div>
            <div className="container">
                <div className="row mx-5 my-5 py-4">
                    <div className="col-12 col-md-6">
                        <p className="custom-color-blue">Who we are?</p>
                        <h2>Creative and technology partner<br/>for growing brands.</h2>
                        <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget feugiat augue.
                            Ut bibendum aliquet est, ac volutpat mi blandit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget feugiat augue.
                            Ut bibendum aliquet est, ac volutpat mi blandit sit amet.</p>
                        <button className="btn btn-outline-primary px-4 circle-20">Explore more</button>
                    </div>
                    <div className="col-12 col-md-6 pl-5">
                        <img alt="img" src={UndrawGirl} className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default infoPage3
