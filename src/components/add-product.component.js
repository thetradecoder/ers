import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddProduct(){
    const [productName, setProductName] =  useState("");
    const [productId, setProductId] = useState("");

    return(
        <div>
            <form>
                <h2>Add a Product Name</h2>
                <input type="text" placeholder="product id"/>
                <input type="text" placeholder="product name"/>
                <input type="text" placeholder="product category"/>
                <input type="text" placeholder="product size"/>
            </form>
        </div>
    );
}