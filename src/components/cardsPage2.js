import React, {useState, useEffect} from 'react'

import pen from '../assets/pen.png';
import terminal from '../assets/terminal.png';
import write from '../assets/write.png';
import CustomAlert from './cutomAlert';

function CardsPage2() {

    const [visible, setVisible] = useState(false);

    const scrollAction = () =>{
        if(window.scrollY >= 250 && window.scrollY<=1500){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    const manualClose = () =>{
        setVisible(false);
        window.removeEventListener("scroll", scrollAction);
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollAction) 
    },[])
    

    return (
        <div className="cardPage2-bg my-3">

            { visible ? <CustomAlert ><button onClick={manualClose} className="btn btn-danger">X</button><br/>This alert type message nearly took BRUST my laptop to develop <br/> Again some alert message here just to test if it is working or not ! </CustomAlert> : null }

            <div className="container">
                <div className="row mx-5">
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap">
                        <div className=" d-flex align-items-center justify-content-center">
                            <div className=" border p-2 m-2 py-4 px-4 shadow-effect">
                                <img alt="img" src={terminal} className="" />
                                <h5 className="my-2">Development</h5>
                                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div>
                            <div className=" border p-2 m-2 py-4 px-4 shadow-effect">
                                <img alt="img" src={pen} className="" />
                                <h5 className="my-2">Design</h5>
                                <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumconsectetur adipiscing elit.</p>
                            </div>
                            <div className=" border p-2 m-2 mt-3 py-4 px-4 shadow-effect">
                                <img alt="img" src={write} className="" />
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

export default CardsPage2
