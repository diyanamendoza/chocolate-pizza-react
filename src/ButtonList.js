import React, { Component } from 'react'

const shareIcons = ['fb-icon.png', 'twit-icon.png', 'gp-icon.png', 'insta-icon.png', 'flic-icon.png', 'pint-icon.png', 'rss-icon.png', 'mail-icon.png'];

export default class ButtonList extends Component {
    render() {
        return (
            <div className="share-buttons">
                {shareIcons.map(icon => <img className="share" src={icon} alt="share" />)}
            </div>
        )
    }
}
