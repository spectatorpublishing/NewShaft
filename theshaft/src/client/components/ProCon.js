import React, { Component } from 'react';
import styled from 'styled-components';

let Section = styled.div`
    display: flex;
    flex-direction: row;
    ${props => props.theme.grayBorder}
    padding: 2vw;
`

let SectionMobile = styled(Section)`
    flex-direction: column;
`

let ListBox = styled.div`
    flex: 1;
`

let Divider = styled.div`
    width: 1px;
    margin-right: 2vw;
    background-color: ${props => props.theme.lightGray};
`

let DivideMobile = styled.div`
    height: 1px;
    border-bottom: 1px ${props => props.theme.lightGray} solid;
    padding-bottom: 1vw;
`

let Head = styled.h1`
    text-align: center;
    font-weight: initial;
    // margin-top: -1.44vw;
`

let Title = styled.h2`
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
      const isMobile = width <= 768;
      if (isMobile) {
        let k = 0;
        return (
          <div>
            <Title>Pros and Cons</Title>
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
              <Head>&#9785;</Head>
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
          <Title>Pros and Cons</Title>
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
              <Head>&#9785;</Head>
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