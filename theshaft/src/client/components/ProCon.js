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
          <section>
            <div class="listBox">
              <h1 class="header">Pros</h1>
                <ul>
                  {this.state.pros.map(pro => (
                    <li>{pro}</li>))}
                </ul>
            </div>
            <div class="divider"></div>
            <div class="listBox">
              <h1 class="header">Cons</h1>
                <ul>
                  {this.state.cons.map(con => (
                    <li>{con}</li>))}
                </ul>
            </div>
          </section>
        );
      }
}