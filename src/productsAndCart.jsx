import { useState, useEffect } from 'react'
import data from './data.json'

import Cart from './Cart'
import AllProducts from './allProducts'
import OrderConfirmed from './orderConfirmed'

function ProductsAndCart (){

    const [cartProducts, setCartProducts] = useState([])

    const [isConfirmedOrderVisible, setIsConfirmedOrderVisible] = useState(false);

    const reloadPage = () =>{
        window.location.reload();
    }

    const totalAmount = cartProducts.reduce ((accumulator, cartProduct)=>{
        return accumulator + (cartProduct.quantity*cartProduct.price)
    }, 0)



    const [products, setProducts] = useState(
        data.map(
            (product, index) =>({
                ...product,
                key: index,
                quantity: 0,
            })))
    

        useEffect(
            () =>{
                const updatedProducts = products.filter (p => p.quantity >= 1)
                setCartProducts (updatedProducts)
                console.log(cartProducts)
            }  
        ,[products])

        useEffect(
            () =>{
                if(isConfirmedOrderVisible){
                    document.body.style.overflow = 'hidden';
                    window.scrollTo({top: 0, behavior: 'smooth'});
                    console.log('Order Confirmed')
                } else{
                    document.body.style.overflow = 'auto'
                }
            }, [isConfirmedOrderVisible]
        )



    return(

        <div className='productsAndcart'>

        {isConfirmedOrderVisible && <OrderConfirmed reloadPage={reloadPage} cartProducts={cartProducts} totalAmount={totalAmount}></OrderConfirmed>}

        <AllProducts products={products} setProducts={setProducts}>
        </AllProducts>
        <Cart
        products={products}
        setProducts={setProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        onConfirmOrder = {() => setIsConfirmedOrderVisible(true)}
        totalAmount={totalAmount}
        ></Cart>
        </div>
       
    )
}

export default ProductsAndCart