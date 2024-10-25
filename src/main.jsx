import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductImage from './productImage'
import Product from './product'
import ProductInfo from './productInfo'
import AllProducts from './allProducts'
import Cart from './Cart'
import ProductsAndCart from './productsAndCart'
import OrderConfirmed from './orderConfirmed'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ProductsAndCart />
  </StrictMode>
)
