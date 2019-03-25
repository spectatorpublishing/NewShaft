import React, { Component } from 'react';
import styled from 'styled-components';
import sad from "../assets/icons/sad.svg";
import happy from "../assets/icons/happy.svg";

let Section = styled.div`
    display: flex;
    flex-direction: row;
    ${props => props.theme.grayBorder}
    padding: 1rem;
`

let SectionMobile = styled(Section)`
    flex-direction: column;
`

let ListBox = styled.div`
    flex: 1;
`

let ListPoints = styled.ul`
  padding-inline-start: 1.2rem;
`

let Divider = styled.div`
    width: 1px;
    margin: 0 2vw;
    background-color: ${props => props.theme.lightGray};
`

let DivideMobile = styled.div`
    height: 1px;
    border-bottom: 1px ${props => props.theme.lightGray} solid;
    margin-bottom: 1rem;
`

let Head = styled.div`
    text-align: center;
`

let Title = styled.h2`
`

let ProConIcon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
`

let HappyIcon = styled(ProConIcon)`
  object-position: 0 100%;
`

let SadIcon = styled(ProConIcon)`
  object-position: 100% 0;
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
              <Head>
                <HappyIcon src={happy} alt="Pros"/>
              </Head>
                <ListPoints>
                  {this.state.pros.map(pro => (
                    <li key={k++}>{pro}</li>))}
                </ListPoints>
            </ListBox>
            <DivideMobile></DivideMobile>
            <ListBox>
              <Head>
                <SadIcon src={sad} alt="Cons"/>
              </Head>
                <ListPoints>
                  {this.state.cons.map(con => (
                    <li key={k++}>{con}</li>))}
                </ListPoints>
            </ListBox>
          </SectionMobile>
          </div>
        );
      }
      
      else {
      let k = 0;
        return (
        <div>
          <Section>
            <ListBox>
              <Head>
                <HappyIcon src={happy} alt="Pros"/>
              </Head>
              <ListPoints>
                {this.state.pros.map(pro => (
                  <li key={k++}>{pro}</li>))}
              </ListPoints>
            </ListBox>
            <Divider/>
            <ListBox>
              <Head>
                <SadIcon src={sad} alt="Cons"/>
              </Head>
              <ListPoints>
                {this.state.cons.map(con => (
                  <li key={k++}>{con}</li>))}
              </ListPoints>
            </ListBox>
          </Section>
          </div>
        );
      }
    }
}