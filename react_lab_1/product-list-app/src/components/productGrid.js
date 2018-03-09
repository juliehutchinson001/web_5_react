import React, { Component } from 'react';
import inventory from './products';

class productGrid extends Component {
    render() {
        return ( <div>
                    <ListedItem products={products} categories={categories} />
                </div>
    }
}