import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Cart from './Cart.jsx'

import data from './data.json'

function ProductImage ({index}){

  return(
 

          <div className="product-image">
          <picture>
            <source media="(max-width:600px)" srcSet={data[index].image.mobile}/>
            <source media="(max-width:1000px)" srcSet={data[index].image.tablet}/>
            <source media="(min-width:1001px)" srcSet={data[index].image.desktop}/>
  
            <img src={data[index].image.thumbnail} alt="" />
          </picture>
        </div>
      
      
  
  )
}




export default ProductImage
