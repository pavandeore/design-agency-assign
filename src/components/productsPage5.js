import React from 'react'
import Data from './productsData/index'
import Product from './productsData/Product'

function productsPage5() {

    const totalProducts = Data.map((e)=> <Product url={e.img_url} txt={e.txt} link={e.link}  /> )

    return (
        <div className="text-center container">
            <h2>Our Owning Products</h2>
            <p className="custom-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget feugiat augue.<br/>
             Ut bibendum aliquet est, ac volutpat mi blandit sit amet.</p>
            <div className="products-list">
                {totalProducts}
            </div>
        </div>
    )
}

export default productsPage5
