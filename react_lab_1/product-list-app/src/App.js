import React, { Component } from 'react';
import logo from './logo.svg';

import SortingBar from './components/sortingBar';
//ProductGrid is the inventory component where items are shown
import ProductGrid from './components/productGrid';
//inventory and category are extracted from product.js
//inventory is an array of items
//categories are the sorted items in the array
import inventory, {categories} from './products';
import './App.css';

//This is the outward layer where the inner components are laid out
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <SortingBar categories={categories}/>
                <ProductGrid products={inventory} categories={categories} />
            </div>
        );
    }
}




export default App;