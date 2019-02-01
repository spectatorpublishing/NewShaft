import React, { Component } from 'react';
import styled from 'styled-components';

let Section = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    border: 1px grey solid;
    border-radius: 1.5vw;
    padding: 1.5vw;
    width: 37vw;
`

let ListBox = styled.div`
    color: grey;
    flex: 0 1 auto;
`

let Divider = styled.div`
    width: 1px;
    margin-left: 14vw;
    margin-right: 0.7vw;
    background-color: grey;
`

let Head = styled.div`
    color: grey;
    font-size: 2vw;
    font-weight: bolder;
    margin-top: -0.3vw;
    margin-left: 0.6vw;
`


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
          <Section>
            <ListBox>
              <Head>Pros</Head>
                <ul>
                  {this.state.pros.map(pro => (
                    <li>{pro}</li>))}
                </ul>
            </ListBox>
            <Divider/>
            <ListBox>
              <Head>Cons</Head>
                <ul>
                  {this.state.cons.map(con => (
                    <li>{con}</li>))}
                </ul>
            </ListBox>
          </Section>
        );
      }
}