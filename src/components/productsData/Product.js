import React from 'react'

function Product(props) {
    return (
        <div>
            <img src={props.url} className="w-25" /><br/>
            <p>{props.txt}</p>
            <a href={props.link}>Learn More</a>
        </div>
    )
}

export default Product
