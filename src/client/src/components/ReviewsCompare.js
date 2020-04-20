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
  margin-bottom: 15%;
  text-align: center;
`

const Button = styled.a`
  flex-basis: 100%;
  text-align: center;
  color: ${props => props.theme.columbiaBlue};
  font-size: 0.7rem;
  text-decoration: none;
`

const Face = styled.span`
  align-self: left;
`

const Speaker = styled.span`
  align-self: left;
`

const Shake = styled.span`
  align-self: left;
`

const Dancer = styled.span`
  align-self: left;
`

const Thumb = styled.span`
  align-self: left;
`

const Score = styled.div`
  margin-top: 0.4em;
  text-align: center;
`

export default class QuickGlanceBox extends Component {
  constructor(props) {
      super(props);


  }

  createClean(score) {
      let wrapper = [];
      let faces = [];
      let k = 0
      for(let i = 0; i < score; i++) {
        faces.push(<Face key={k++}>&#x1f929;</Face>);
      }
      wrapper.push(faces);
      return wrapper;
  }
    
  createNoise(score) {
      let wrapper = [];
      let speakers = [];
      let k = 0
      for(let i = 0; i < score; i++) {
        speakers.push(<Speaker key={k++}>&#x1f508;</Speaker>);
      }
      wrapper.push(speakers);
      return wrapper;
  }
    
  createComm(score) {
      let wrapper = [];
      let shakes = [];
      let k = 0
      for(let i = 0; i < score; i++) {
        shakes.push(<Shake key={k++}>&#x1f91d;</Shake>);
      }
      wrapper.push(shakes);
      return wrapper;
  }
    
  createParty(score) {
      let wrapper = [];
      let dancers = [];
      let k = 0
      for(let i = 0; i < score; i++) {
        dancers.push(<Dancer key={k++}>&#x1f57a;</Dancer>);
      }
      wrapper.push(dancers);
      return wrapper;
  }
    
  createAmenities(score) {
      let wrapper = [];
      let thumbs = [];
      let k = 0
      for(let i = 0; i < score; i++) {
        thumbs.push(<Thumb key={k++}>&#x1f44d;</Thumb>);
      }
      wrapper.push(thumbs);
      return wrapper;
  }

  render() {
      
      /*All scores hardcoded as 5*/
      return (
          <FeatureColumn>
              <Feature>
                  <h4>Cleanliness</h4>
                  <Score>{this.createClean(5)}</Score>
              </Feature>
              <Feature>
                  <h4>Noise Level</h4>
                  <Score>{this.createNoise(5)}</Score>
              </Feature>
              <Feature>
                  <h4>Community</h4>
                  <Score>{this.createComm(5)}</Score>
              </Feature>
              <Feature>
                  <h4>Party Scene</h4>
                  <Score>{this.createParty(5)}</Score>
              </Feature>
              <Feature>
                  <h4>Amenities</h4>
                  <Score>{this.createAmenities(5)}</Score>
              </Feature>
              <Feature>
                  <Button href = {"https://theshaft.info/reviews"}>See all reviews ></Button>
              </Feature>
          </FeatureColumn>
      )
  }

}