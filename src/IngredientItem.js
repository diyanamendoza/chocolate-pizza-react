import React, { Component } from 'react'

export default class IngredientItem extends Component {
    state = {
        isBoxChecked: false
    };

    checkBox = () => {
        this.setState(prevState => ({ isBoxChecked: !prevState.isBoxChecked }));
    }
    
    render() {
        return (
            <li className={this.state.isBoxChecked ? "checked" : "not-checked" }><input type="checkbox"  onClick={this.checkBox} />{this.props.amount} {this.props.ingredient} </li>
        )
    }
}
