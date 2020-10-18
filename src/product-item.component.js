import React from 'react';

export default function ProductItem(){


    function createProduct(item){
        return (
        <li>{item}</li>
        )
    }
    var productEntry = this.props.entries;
    var list = productEntry.map(createProduct);
    return(
        <div>
            <li>{list}</li>
        </div>
    );

}