import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myComponent from './myComponent';

console.log(categories);
console.log(inventory);

class App extends Component {
    render() {
        return ( <div className = "App" >
            <h1 > Showing inventory of products </h1> </div>
        );
    }
}

export default App;