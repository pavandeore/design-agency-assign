import React from 'react'
import './subscribe.css';

function Subscribe() {
    return (
        <div className="text-center custom-50vh pt-3 subscribe-div">
            <h5 className="custom-color-blue mt-5">Join the community</h5>
            <h4 className="mt-2">Signup to see all our latest works, news<br/> Blog, job posts.</h4>
            <div className="input-group d-flex justify-content-center">
                <input className="type-mail bg-white px-5 py-2 mt-4" placeholder="Type your email here..." />
                <div class="input-group-append">
                    <button class="btn send-mail-btn rounded-circle text-white mt-4" type="button">&#x27a4;</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
