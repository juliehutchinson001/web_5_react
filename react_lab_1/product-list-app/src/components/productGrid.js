import React, { Component } from 'react';
import ListedItem from './listedItem';

class ProductGrid extends Component {

    namedItems() {
        return this.props.products.map((product) => {
            return <ListedItem 
                key={product.id}
                className="Item"
                name={product.name}
                price={product.price} 
                category={product.category} />

        })
    }

    categories() {
        return this.props.category.map((classification) => {
            
        })
    }

    render() {
        return ( <div>
                    {/* display categories here */}
                    {
                        this.namedItems()
                    }
                </div>
        )
    }
};

export default ProductGrid

// var a = [1,2,3,4]

// var b = a.map((price) => {
//     return "$"+price
// })

// ["$1", "$2", ]