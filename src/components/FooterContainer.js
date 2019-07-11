import React, { Component } from 'react'
import './FooterContainer.css'

export class FooterContainer extends Component {
    year = new Date().getFullYear();

    render() {

        return (
            <div className="Footer">
                <p> Yuri van Schaaik, Tatiany Cristine</p>
                <p>Amsterdam</p>
                <p> © {this.year}</p>
            </div>
        )
    }
}

export default FooterContainer
