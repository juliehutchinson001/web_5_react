import React, { Component } from 'react';

class ListedItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.price}</p>
                <p>{this.props.category}</p>

            </div>
        )
    };
}

export default ListedItem