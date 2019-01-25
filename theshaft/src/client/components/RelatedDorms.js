import React, { Component } from "react";

import "../css/RelatedDorms.css";

export default class RelatedDorms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            image: this.props.image,


        }
        
    }

    render() {
        return (
            <div className="RelatedDorms">
                <img src={this.state.image}></img>
                <h3>{this.state.name}</h3>
            </div>
        );

    }

}
