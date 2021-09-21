import React, { Component } from 'react'
import ButtonList from './ButtonList.js'
// import hrback from 'http://localhost:3000/hr-img.png';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="left-header">
                    <img src={this.props.logoImage} alt="logo"/>
                    <div className="logo-text">
                        <h1>Delicious</h1>
                        <h2>THE BEST FOOD BLOG ON THE WEB</h2>
                    </div>
                </div>
                <div className="share">
                    <ButtonList />
                </div>
            </header>
        )
    }
}
