import React from "react";
import ProductCard from "./ProductCard";

function ProductList(){
    const products = [
        {
            title:"Iphone 14",
            price:"100000"
        },
        {
            title:"Google Pixel 7",
            price:"50000"
        },
        {
            title:"Mac Book Air",
            price:"80000"
        },
        {
            title:"Samsung Galaxy 6",
            price:"19000"
        },
        {
            title:"Nokia 110",
            price:"2000"
        }
    ]
    return(
        <div>
            {
                products.map(function(product){
                    return <ProductCard title={product.title} price= {product.price}/>
                })
            }
        </div>
    )
}

export default ProductList;