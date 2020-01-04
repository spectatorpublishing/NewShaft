import React, { Component } from 'react';
import styled from 'styled-components';
import sad from "../assets/Icons/sad.svg";
import happy from "../assets/Icons/happy.svg";
import icon from "../assets/marker.svg"; // to-do: import all actual icons


const Section = styled.div`
    display: flex;
    ${props => props.theme.grayBorder}
    padding: 1rem;
`

const SectionMobile = styled(Section)`
    flex-direction: column;
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

const Title = styled.h2`
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