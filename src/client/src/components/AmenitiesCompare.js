import styled from "styled-components";
import React, { Component }  from "react";

const FeatureColumn = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 1px -4px 7px 2px rgba(0,0,0,0.1);

  @media only screen and (max-width: 700px){
    flex-basis: 48%;
  }
`

const Feature = styled.div`
  flex-basis: 100%;
  margin-top: 5%;
  margin-bottom: 20%;
  text-align: center;
`

const Symbol = styled.div`
  align-self: left;
  margin-bottom: 0.3em;
`

export default class AmenitiesBox extends Component {
    constructor(props) {
        super(props);


    }

    createSymbol(positive) {
        let symbol = [];

        if (positive) {
            symbol.push(<Symbol>&#x2705;</Symbol>)
        } else {
            symbol.push(<Symbol>&#x274c;</Symbol>)
        }
        return symbol;
    }

    render() {

        /* All values hardcoded, first true (1), rest false (0)*/
        return (
            <FeatureColumn>
                <Feature>
                    <h4>Per Floor</h4>
                    <p>kitchen</p>
                </Feature>
                <Feature>
                    <h4>Single Use</h4>
                    <p>bathroom</p>
                </Feature>
                <Feature>
                    <Symbol>{this.createSymbol(1)}</Symbol>
                    <p>AC</p>
                </Feature>
                <Feature>
                    <Symbol>{this.createSymbol(0)}</Symbol>
                    <p>gym</p>
                </Feature>
                <Feature>
                    <Symbol>{this.createSymbol(0)}</Symbol>
                    <p>printing</p>
                </Feature>
                <Feature>
                    <Symbol>{this.createSymbol(0)}</Symbol>
                    <p>computer lab</p>
                </Feature>
                <Feature>
                    <Symbol>{this.createSymbol(0)}</Symbol>
                    <p>mail service</p>
                </Feature>
            </FeatureColumn>
        )
    }

}