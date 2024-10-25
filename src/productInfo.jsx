import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data.json'

function ProductInfo ({index}){
    return(
        <div className="product-texts" style={{display:'flex', flexDirection:'column',
        }}>
            <span className="product-category" style={{color: 'hsl(12, 20%, 44%)', fontWeight: '100'}}>{data[index].category}</span>
            <span className="product-name" style={{color: 'hsl(14, 65%, 9%)', fontWeight: '500', margin: '3px 0'}}>{data[index].name}</span>
            <span className="product-price" style={{color: 'hsl(14, 86%, 42%)', fontWeight: '600'}}>  ${data[index].price.toFixed(2)}</span>
          </div>
    )
}

export default ProductInfo