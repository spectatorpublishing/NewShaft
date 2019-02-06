import React, { Component } from 'react';
import styled from 'styled-components';

let Section = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2vw;
`

let ListBox = styled.div`
    color: grey;
    flex: 1;
`

let Divider = styled.div`
    width: 1px;
    margin-right: 2vw;
    background-color: grey;
`

let Head = styled.div`
    color: grey;
    font-size: 1.5rem;
    font-weight: bolder;
    margin: .5rem 0 -0.5rem 1.2rem;
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
        let k = 0;
        return (
          <Section>
            <ListBox>
              <Head>Pros</Head>
                <ul>
                  {this.state.pros.map(pro => (
                    <li key={k++}>{pro}</li>))}
                </ul>
            </ListBox>
            <Divider/>
            <ListBox>
              <Head>Cons</Head>
                <ul>
                  {this.state.cons.map(con => (
                    <li key={k++}>{con}</li>))}
                </ul>
            </ListBox>
          </Section>
        );
      }
}