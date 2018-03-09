import React, { Component } from 'react';
import logo from './logo.svg';
import ProductGrid from './components/productGrid';
import inventory, {categories} from './products';
import './App.css';

console.log(categories);
console.log(products);

class App extends Component {
    render() {
        return ( <div className = "App" >
                    <ProductGrid products={products} categories={categories} />
                </div>
        );
    }
}

export default App;