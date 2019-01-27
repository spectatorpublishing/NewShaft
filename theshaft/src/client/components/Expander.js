import React, { Component } from "react";
import "../css/Expander.css";

export default class Expander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.toggleSize = this.toggleSize.bind(this);
  }

  toggleSize(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <div className="expander">
        <div className="expanderContent">
          {this.props.children}
          <div className="expanderList">
            {this.state.expanded ? this.props.showAll : this.props.showSome}
          </div>
        </div>
        <button className="toggleSize" onClick={this.toggleSize}>
          Show {this.state.expanded ? "Less" : "All"}  
        </button>
      </div>
    );
  }
}
