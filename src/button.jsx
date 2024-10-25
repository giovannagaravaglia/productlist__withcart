import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data.json'


import Product from './product'

function Button ({addCart, decrementar, incrementar, qtd, index}){

  
    



    return(
        <div className="button-container">

            {
                qtd === 0 ?

                <div className="btn-cart btn-p" onClick={addCart}>
                    <img src="/images/icon-add-to-cart.svg" alt="cart" />
                    <span>Add to Cart</span>
                </div>

                :

                <div className="btn-qtd btn-p">

                    <div className="img-qtd">
                        <img src="/images/icon-decrement-quantity.svg" onClick={decrementar} alt=""/>
                    </div>

                    <span>{qtd}</span>

                    <div className="img-qtd">
                        <img src="/images/icon-increment-quantity.svg" onClick={incrementar} alt=""/>
                    </div>
                </div>

                
            }

        </div>

    
    )
}

export default Button