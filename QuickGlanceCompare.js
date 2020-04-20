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
  margin-bottom: 25%;
  text-align: center;
`

export default class QuickGlanceBox extends Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <FeatureColumn>
                <Feature>
                    <h4>Corridor</h4>
                    <p>style</p>
                </Feature>
                <Feature>
                    <h4>Singles and Doubles</h4>
                    <p>style</p>
                </Feature>
                <Feature>
                    <h4>Sophomores and Juniors</h4>
                    <p>residents</p>
                </Feature>
                <Feature>
                    <h4>1234-2000</h4>
                    <p>lottery number</p>
                </Feature>
            </FeatureColumn>
        )
    }

}