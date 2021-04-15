import React from 'react'

function Product(props) {
    return (
        <div className="py-3">
            <img alt="img" src={props.url} className="w-25" /><br/>
            <p className="my-2 custom-color-gray">{props.txt}</p>
            <a href={props.link} className="custom-color-blue">Learn More</a>
        </div>
    )
}

export default Product
