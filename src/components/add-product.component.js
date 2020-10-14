import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddProduct(){
    const [productName, setProductName] =  useState("");
    const [productId, setProductId] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSize, setProductSize] = useState("");

    function onSubmitEnlistNewProduct(e){
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={onSubmitEnlistNewProduct}>
                <h2>Add a Product Name</h2>
                <input type="text" placeholder="product id"/>
                <input type="text" placeholder="product name"/>
                <input type="text" placeholder="product category"/>
                <input type="text" placeholder="product size"/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}