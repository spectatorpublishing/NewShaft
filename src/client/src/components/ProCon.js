import React, { Component } from 'react';
import styled from 'styled-components';
import sad from "../assets/Icons/sad.svg";
import happy from "../assets/Icons/happy.svg";
import icon from "../assets/marker.svg"; // to-do: import all actual icons


const ProConTitle = styled.h2`
  margin-top: 2vw;
  margin-bottom: 1vw;
  font-weight: 900;
  width: 100%;
`
const Section = styled.div`
    display: flex;
    padding: 3vw;
    margin-top: 1rem;
    box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
`

const SectionMobile = styled(Section)`
    flex-direction: column;
    margin-top: 1rem;
    box-shadow: 3px -4px 7px 2px rgba(0,0,0,0.1);
    padding-right: 1rem;
    
`

const ListBox = styled.div`
    flex: 1;
    
`

const ListPoints = styled.ul`
  padding-inline-start: 1.2rem;
`

const Divider = styled.div`
    width: 1px;
    margin: 0 2vw;
    background-color: ${props => props.theme.lightGray};
`

const DivideMobile = styled.div`
    height: 1px;
    border-bottom: 1px ${props => props.theme.lightGray} solid;
    margin-bottom: 1rem;
`

const Head = styled.div`
    text-align: center;
`


const ProConIcon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
`

const HappyIcon = styled(ProConIcon)`
  object-position: 0 100%;
`

const SadIcon = styled(ProConIcon)`
  object-position: 100% 0;
`


const AmenityIcon = styled.img`
  opacity: 0.5;
  height: 20px;
`

const Amenity = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
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
            <ProConTitle>Pros and Cons</ProConTitle>
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
          <ProConTitle>Pros and Cons</ProConTitle>
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