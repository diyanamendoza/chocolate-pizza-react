import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'
import { ingredientsArray } from './data.js'


export default class IngredientList extends Component {
    render() {
        return (
                <ul>
                {
                    ingredientsArray.map(ingredient =>
                        <IngredientItem
                            amount={ingredient.amount}
                            ingredient={ingredient.ingredient}
                        />)
                }
                </ul>
        )
    }
}
