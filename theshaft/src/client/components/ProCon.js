import React, { Component } from 'react';
import styled from 'styled-components';

let Section = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2vw;
`

let SectionMobile = styled.div`
    display: flex;
    flex-direction: column;
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

let DivideMobile = styled.div`
    height: 1px;
    border-bottom: 1px grey solid;
    padding-bottom: 1vw;
`

let Head = styled.div`
    color: grey;
    font-size: 4rem;
    font-weight: bolder;
    text-align: center;
    margin-top: -1.44vw;
`

let HeadCon = styled.div`
    color: grey;
    font-size: 2.5rem;
    font-weight: bolder;
    text-align: center;
`

let Title = styled.div`
    text-align: center;
    font-size: 2rem;
    padding-bottom: 1vw;
`


export default class ProCon extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          pros: this.props.pros,
          cons: this.props.cons,
          width: window.innerWidth,
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
    
      showAllAmenities() {
        let index = 0
        return this.state.amenities.map((amenity) => {
          return <Amenity key={index++}>
            <AmenityIcon src={icon} alt={amenity[0]}/>
            <div> {amenity[1]} </div>
          </Amenity>
          });
      }
    
      render() {
      const { width } = this.state;
      const isMobile = width <= 700;
      if (isMobile) {
        let k = 0;
        return (
          <div>
            <Title>The Good and the Not So Good</Title>
            <SectionMobile>
            <ListBox>
              <Head>&#9786;</Head>
                <ul>
                  {this.state.pros.map(pro => (
                    <li key={k++}>{pro}</li>))}
                </ul>
            </ListBox>
            <DivideMobile></DivideMobile>
            <ListBox>
              <HeadCon>&#9785;</HeadCon>
                <ul>
                  {this.state.cons.map(con => (
                    <li key={k++}>{con}</li>))}
                </ul>
            </ListBox>
          </SectionMobile>
          </div>
        );
      }
      
      else {
      let k = 0;
        return (
        <div>
          <Title>The Good and the Not So Good</Title>
          <Section>
            <ListBox>
              <Head>&#9786;</Head>
                <ul>
                  {this.state.pros.map(pro => (
                    <li key={k++}>{pro}</li>))}
                </ul>
            </ListBox>
            <Divider/>
            <ListBox>
              <HeadCon>&#9785;</HeadCon>
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