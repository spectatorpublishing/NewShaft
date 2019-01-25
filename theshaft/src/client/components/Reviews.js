import React, { Component } from "react";
import "../css/Reviews.css";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div id="parent">
        <div id="reviewQuickView">
          <div>
            <div>Carman Hall</div>
            <div>Stars</div>
          </div>
          <div>
            <div>Review 1</div>
            <div>Review 2</div>
          </div>
        </div>
        <div id="readMore">
          Read All
        </div>
      </div>
    );
  }
}
