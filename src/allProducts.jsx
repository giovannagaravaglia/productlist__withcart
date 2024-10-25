import { useState } from "react";
import Product from "./product";
import data from './data.json';
import './main.css'

function AllProducts ({index, qtd, products, setProducts}){



    return(

        <div className="AllProducts-container">

            <h1 className="AllProducts-title">Desserts</h1>

            <div className="AllProducts">

                {
                    data.map((info, index) =>{

                        return <Product key={info.id} index={index} products={products} setProducts={setProducts}></Product>
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts