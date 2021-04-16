import React from 'react'
import Data from './productsData/index'
import Product from './productsData/Product'
import './productsPage5.css'

function productsPage5() {

    const totalProducts = Data.map((e)=> <Product url={e.img_url} txt={e.txt} link={e.link} key={e.id} /> )

    return (
        <div className="text-center px-3 container">
            <h2>Our Owning Products</h2>
            <p className="custom-color-gray my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget feugiat augue.<br/>
             Ut bibendum aliquet est, ac volutpat mi blandit sit amet.</p>
            <div className="products-list my-5">
                {totalProducts}
            </div>
        </div>
    )
}

export default productsPage5
