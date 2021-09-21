import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <div className='author-share-container'>
                    <div className="author-container" >
                        <img src="van-pic.png" alt="Author" />
                        <div class="text-container">
                            <h3>Vanessa Stevenson</h3>
                            <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                        </div>
                    </div>
                    <button class="share-button">SHARE RECIPE</button>
                </div>
                <div className="footer-line-img-container">
                    <hr className="hr-line-footer"></hr>
                    <img src="small-logo.png" alt="Small Logo" />
                    <hr class="hr-line-footer"></hr>
                </div>
                <div className="copyright-container">
                    <p class="copyright-text">Delicious © 2013 &#183 All Rights Reserved.</p>
                    <p class="copyright-text">Proudly published with Ghost.</p>
                </div>
            </div>
        )
    }
}
