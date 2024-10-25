import React from "react";
import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data.json'


function Cart ({products, setProducts, cartProducts, setCartProducts, onConfirmOrder, totalAmount}){


    // const totalAmount = cartProducts.reduce ((accumulator, cartProduct)=>{
    //     return accumulator + (cartProduct.quantity*cartProduct.price)
    // }, 0)

    const deleteItem = (index) =>{

        const productId = cartProducts [index].id;


        const updatedItens = [...cartProducts];
        updatedItens.splice(index,1);

        setCartProducts(updatedItens)

        const updatedProducts = products.map((product) =>{
            if(product.id === productId){
                return{...product, quantity: 0};
            }

            return product

            
        })

        setProducts(updatedProducts);   
    }



    return (

        <div className="cart-container">

            <span className="cart-title">Your Cart ({cartProducts.length})</span>


            {
                (cartProducts.length === 0) ?

                <div className="cart-empty cart">
                    <img src="/images/illustration-empty-cart.svg" alt="" />
                    <span>Your added itens will appear here</span>
                </div>

                :

                <div className="cart-full cart">

                    {
                        cartProducts.map((cartProduct, index) =>(
                        <div key={cartProduct.id} className="cart-full__product">
                        
                        <div className="cart-products">

                            <span className="product-unit-name">{cartProduct.name}</span>

                            <div className="cart-full__infos">
                                <span className="product-unit-qtd">{cartProduct.quantity}x</span>
                                <span className="product-unit-price">@ ${cartProduct.price.toFixed(2)}</span>
                                <span className="product-unit-amount">${(cartProduct.quantity * cartProduct.price).toFixed(2)}</span>
                            </div>

                        </div>

                        <img className="icon-remove" src="/images/icon-remove-item.svg" alt="" onClick={() => deleteItem(index)}/>

                        </div>
                        ))
                    }
                    

                    <div className="order-total">
                        <span className="order-total-title">Order Total</span>
                        <span className="order-total-amount">${totalAmount.toFixed(2)}</span>
                    </div>

                    <div className="delivery">
                        <img src="/images/icon-carbon-neutral.svg" alt="" />
                        <span>This is a <strong>carbon-neutral</strong> delivery</span>
                    </div>

                    <div className="btn-confirmOrder">
            <span onClick={onConfirmOrder}>Confirm Order</span>
           </div>
            
                </div>
            }

           

            



        </div>
    )
}

export default Cart