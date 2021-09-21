import React, { Component } from 'react'

export default class ImageSection extends Component {
    render() {
        return (
            <div>
                <h1 id="post-title">Chocolate Pizza</h1>
                <p id="post-date">POSTED ON 15 DEC 2013 / DESSERTS</p>
                <div id="print-container">
                    <img alt="print" id="print-icon" src="print-icon.png" />
                    <p id="print">PRINT</p>  
                </div>    
                <img alt="chocolate pizza" src="choco-pizza.png"></img>
            </div>
        )
    }
}
