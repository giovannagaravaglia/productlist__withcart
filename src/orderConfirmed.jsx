import { useState, useEffect, useRef } from 'react'
import data from './data.json'

import Cart from './Cart'
import AllProducts from './allProducts'

function OrderConfirmed ({reloadPage, cartProducts, totalAmount}){
    return (

        <div className="orderConfirmed-wrapper">
            <div className="orderConfirmed">
                <img className='oD__img' src="images/icon-order-confirmed.svg" alt="icon of order confirmed" />

                <div className="oD-texts">

                    <h2 className="oD-texts__title">Order Confirmed</h2>
                    <span className="oD-texts__subtitle">We hope you enjoy your food!</span>

                </div>

                <div className="oD-order">

                    <div className="oD-order__allItens">


                        {
                            cartProducts.map((cartProduct, index)=>(
                                <div className="oD-allItens__item">

                                    <div className="oD-item-wrapper">

                                        <img className='oD-item__img' src={cartProduct.image.thumbnail} alt="" />

                                        <div className="oD-item__info">
                                            <span className="oD-info__name">{cartProduct.name}</span>

                                            <div className="oD-info__qtdPrice">
                                            <span className='oD-info__qtd'>{cartProduct.quantity}x</span>
                                            <span className='oD-info__price'>@ {cartProduct.price.toFixed(2)}</span>
                                            </div>
                                        </div>

                                    </div>

                                    <span className="oD-item__amount">${(cartProduct.quantity*cartProduct.price).toFixed(2)}</span>


                                </div>
                            ))
                        }


                        

                    </div> 

                    <div className="oD-order__amount">
                        <span className="oD-amount__text">Order Total</span>
                        <span className="oD-amount__value">${totalAmount.toFixed(2)}</span>
                    </div>


                </div>

                <span className="oD-button" onClick={reloadPage}>Start New Order</span>
                
            </div>

        </div>
    )
}

export default OrderConfirmed