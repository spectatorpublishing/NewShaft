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
    font-size: 5rem;
    font-weight: bolder;
    margin: .5rem 0 -0.5rem 1.2rem;
`

let h2 = styled.div`
    color: grey;
    font-size: 3rem;
    font-weight: bolder;
    margin: .5rem 0 -0.5rem 1.2rem;
    padding: 2vw;
`

let li = styled.div`
    color: grey;
    font-size: 1.0rem;
    margin: .5rem 0 -0.5rem 1.2rem;
    padding: 2vw;
`


export default class ProCon extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          width: window.innerWidth,
          pros: this.props.pros,
          cons: this.props.cons,
        };
      }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

      render() {
        const { width } = this.state;
        const isMobile = width <= 700;
        let k = 0;
        if(isMobile){
          return (
              <div>
              <h1> The Good and Not-So-Good </h1>
                  <h2>&#128522;</h2>
                    <ul>
                      {this.state.pros.map(pro => (
                        <li key={k++}>{pro}</li>))}
                    </ul>
              <Divider/>
                  <h2>&#128555;</h2>
                    <ul>
                      {this.state.cons.map(con => (
                        <li key={k++}>{con}</li>))}
                    </ul>
              </div>
            ); 
        } else{
          return (
              <div>
              <h1> The Good and Not-So-Good </h1>
              <Section>
                <ListBox>
                  <Head>&#128522;</Head>
                    <ul>
                      {this.state.pros.map(pro => (
                        <li key={k++}>{pro}</li>))}
                    </ul>
                </ListBox>
                <Divider/>
                <ListBox>
                  <Head>&#128555;</Head>
                    <ul>
                      {this.state.cons.map(con => (
                        <li key={k++}>{con}</li>))}
                    </ul>
                </ListBox>
              </Section>
              </div>
            ); 
        }
        
      }
}