import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


import data from './data.json'
import ProductImage from './productImage'
import ProductInfo from './productInfo'
import Button from './button'


function Product ({index, qtd, products, setProducts}){

    

const product = products [index]




const incrementar = (product) => {

    const updatedProducts = products.map(p =>
        {

            const updatedProduct = p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p

            return updatedProduct


        }

    
      );
      setProducts(updatedProducts);


}



const decrementar = (product) => {

    let updatedProducts = products.map(p =>{

        const updatedProduct = p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p

        return updatedProduct
    }
        
      );
      setProducts(updatedProducts);


}

const addToCart = (product) =>{
    if(product.quantity === 0){
        const updatedProducts = products.map(p =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          );
          setProducts(updatedProducts)
    }
}



  



    return(

        <div className='DivProduct'>
            <ProductImage index={index}></ProductImage>
            <Button qtd={product.quantity} incrementar={()=>incrementar(product)} decrementar={()=>decrementar(product)} addCart={()=>addToCart(product)}></Button>
            <ProductInfo index={index}></ProductInfo>
        </div>

    )
}

export default Product