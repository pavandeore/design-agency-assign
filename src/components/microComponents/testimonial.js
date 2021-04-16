import React from 'react'
import pawan from '../../assets/pawan-small.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


import './testimonial.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "black", marginTop:80, marginRight:200 }}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "black", marginTop:80, marginLeft: '70%', zIndex:10  }}
        onClick={onClick}
        />
    );
}


class testimonial extends React.Component {
    render(){
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
    <div className="container">


        <Slider {...settings}>
            <div className="d-flex row">
                <div className="my-5 py-5 col-12 col-md-5 col-lg-4 ">
                    <img src={pawan} className="w-100 img-thumbnail" />
                </div> 
                <div className="d-flex flex-column p-5 mt-5 col-12 col-md-7 col-lg-8">
                    <div><div className="green"></div><div className="green"></div></div>
                    <div className="custom-color-gray my-5">This is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum text</div>
                    <div>
                        <p>
                        <b>Pawan Deore</b>
                        <p className="custom-color-gray">CEO at XYZ ltd</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex row">
                <div className="my-5 py-5 col-12 col-md-5 col-lg-4 ">
                    <img src={pawan} className="w-100 img-thumbnail" />
                </div> 
                <div className="d-flex flex-column p-5 mt-5 col-12 col-md-7 col-lg-8">
                    <div><div className="green"></div><div className="green"></div></div>
                    <div className="custom-color-gray my-5">This is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum textThis is some lorem ipsum text</div>
                    <div>
                        <p>
                        <b>Pawan Deore</b>
                        <p className="custom-color-gray">CEO at XYZ ltd</p>
                        </p>
                    </div>
                </div>
            </div>
          
        </Slider>


    </div>
    )
    }
}

export default testimonial
