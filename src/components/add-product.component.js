import React, {useState} from 'react';


export default function AddProduct(){
    const [productName, setProductName] =  useState("");
    const [productId, setProductId] = useState("");

    return(
        <div>
            <form>
                <input type="text" placeholder="product id"/>
                <input type="text" placeholder="product name"/>
            </form>
        </div>
    );
}