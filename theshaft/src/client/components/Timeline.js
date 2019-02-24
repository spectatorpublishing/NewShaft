import React, { Component } from 'react';
import styled from 'styled-components';

let Button = styled.button`
    background: blue;
    border: none;
    padding: 15px;
    font-weight: bold;
    border-radius: 50%;

    :hover {
        transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    ${({ clicked }) => clicked && `
        background-color: black;
  	`}
`

let TLpoints = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
`
let Info = styled.div`
    //display: block;
`

let Index1 = styled.div`
`

let TLCs = styled.div`
    display: flex;
    justify-content: space-around;
`

export default class Timeline extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
          NUMpoints: 5,
          index: 1,
          isHidden: true,
      };
    }

// createPoints(NUMpoints) {
//     let allPoints = [];
//     for(let i = 0; i <= NUMpoints; i++) {
//         allPoints.push(<div>point</div>);
//         //<Button  type="button" onClick={() => this.setState({ index : i })}></Button>
//     }
//     return allPoints;
// }

showTL(indexIN) {
    console.log("button state is " + indexIN)
}

//&#x025EF
createCircles(NUMpoints) {
    let wrapper = [];
    let circles = [];
    let k = 0
    for(let i = 0; i < NUMpoints; i++) {
      circles.push(<span key={k++}><Button type="button" onClick={() => {this.showTL(i)}}></Button></span>);
    }
    wrapper.push(<div key={k++}>{circles}</div>);
    return wrapper;
  }


render() {
    const { isOpen } = this.state;
    return (
        <div>
        <TLCs>
            {this.createCircles(this.state.NUMpoints)}
        </TLCs>
        <Info>
            <Index1>timeline index 1</Index1>
        </Info>
        </div>
    );
    }
}