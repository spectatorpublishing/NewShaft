import React, { Component } from 'react';
import "./ProCon.css";

export default class ProCon extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          pros: this.props.pros,
          cons: this.props.cons,
        };
      }
    
      render() {
        return (
          <div id="proConBox">
            <div id="proList">
              <h3 class="header">Pros</h3>
                <ul>
                  {this.state.pros.map(pro => (
                    <li>{pro}</li>))}
                </ul>
            </div>
            <div id="conList">
              <h3 class="header">Cons</h3>
                <ul>
                  {this.state.cons.map(con => (
                    <li>{con}</li>))}
                </ul>
            </div>
          </div>
        );
      }
}