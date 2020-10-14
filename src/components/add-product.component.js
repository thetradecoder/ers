import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddProduct(){
    const [productName, setProductName] =  useState("");
    const [productId, setProductId] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productSize, setProductSize] = useState("");

    function onChangeProductName(e){
        setProductName(e.target.value);
    }
    function onChangeProductId(e){
        setProductId(e.target.value);
    }
    function onChangeProductCategory(e){
        setProductCategory(e.target.value);
    }
    function onChangeProductSize(e){
        setProductSize(e.target.value);
    }

    function onSubmitEnlistNewProduct(e){
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={onSubmitEnlistNewProduct}>
                <h2>Add a Product Name</h2>
                <input type="text" placeholder="product id" onChange={onChangeProductName} className="form-control"/>
                <input type="text" placeholder="product name" onChange={onChangeProductId} className="form-control"/>
                <input type="text" placeholder="product category" onChange={onChangeProductCategory} className="form-control"/>
                <input type="text" placeholder="product size" onChange={onChangeProductSize} className="form-control"/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}