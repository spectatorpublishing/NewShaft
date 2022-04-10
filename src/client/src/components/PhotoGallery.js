import React, {Component} from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/PhotoGallery.css";

const dorm_name_map = {
    "CarmanHall": "Carman Hall",
    "McBainHall": "McBain Hall",
    "47Claremont": "47 Claremont",
    "600W113th": "600 W 113th",
    "600W116thSt.": "600 W 116th St.",
    "616W116thSt.": "616 W 116th St.",
    "620W116thSt.": "620 W 116th St.",
    "601W110thSt.": "601 W 110th St.",
    "CathedralGardens": "Cathedral Gardens",
    "HewittHall": "Hewitt Hall",
    "ElliottHall": "Elliott Hall",
    "SulzbergerTower": "Sulzberger Tower",
    "BroadwayHall": "Broadway Hall",
    "CarltonArms": "Carlton Arms",
    "EastCampus": "East Campus",
    "FslBrownstones": "Fsl Brownstones",
    "FurnaldHall": "Furnald Hall",
    "HarmonyHall": "Harmony Hall",
    "HartleyHall": "Hartley Hall",
    "HoganHall": "Hogan Hall",
    "JohnJayHall": "John Jay Hall",
    "ResidentialBrownstones": "Residential Brownstones",
    "RiverHall": "River Hall",
    "RugglesHall": "Ruggles Hall",
    "SchapiroHall": "Schapiro Hall",
    "SicResidences": "Sic Residences",
    "WallachHall": "Wallach Hall",
    "WattHall": "Watt Hall",
    "WienHall": "Wien Hall",
    "WoodbridgeHall": "Woodbridge Hall",
    "PlimptonHall" : "Plimpton Hall"
  
  }
const PageWrapper = styled.div`
    background-color: rgba(0,0,0,0.85);
    z-index: 5;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: block;
    padding: 2% 2% 2% 2%;
    box-sizing: border-box;
`;
const Button = styled.button`
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 1em;
  padding: 0.5em 3.5em;
`;

//BODY
const Body = styled.div`
    padding-top: 3%;
`;
let DormName = styled.p`
    margin: 0;
    padding: 0 0 2% 0;
    color: white;
    font-weight: 900;
    font-size: 3.5rem;
`;
let LeftArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
let LeftArrow = styled.div`
    cursor: pointer;
`;
let RightArrowContainer = styled.div`
    padding-left: 15px;
    height: 90vh;
`;
let Carousel = styled.div`
  padding: 2% 0;
  display: flex;
`;
let CarouselImg = styled.img`
  height: 55vh;
  object-fit: cover;
  
`;

////////BOTTOM
let Preview = styled.div`
    display: flex;
    padding: 4% 0;
    cursor: pointer;
`;
let PreviewImg = styled.img`
  height: 75px;
  object-fit: cover;
  padding-right: 2rem;
`;

export default class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateModal: this.props.updateModal,
            images: this.props.images,
            photoIndex: 0,
            path: this.props.path,
            dormInfo: {
                DORM: ""
              },
            
        };
    }
    
    componentDidMount() {
        var dormName = this.props.path;
        this.fetchDormInfo(dormName);
    }
    fetchDormInfo(name) {
        const dormName = dorm_name_map[name];
        fetch(`/api/getDormInfo/${dormName}`, {
          method: "GET",
          headers: { "Content-Type": "application/json"},
        })
          .then(res => res.json())
          .then(dormInfo => {
            document.title = this.state.dormInfo.DORM;
            this.setState({dormInfo: dormInfo});
          });
          
      }
    render(){
        let length = this.state.images.length;
        let currentIndex = this.state.photoIndex;
        const prevSlide = () =>{
            this.setState({photoIndex: currentIndex === 0 ? length-1: currentIndex-1});
        }
        const nextSlide = () =>{
            this.setState({photoIndex: currentIndex === length-1 ? 0: currentIndex+1});
        }
        const setSlide = (index) =>{
            this.setState({photoIndex: index});
        }
        return (
            <PageWrapper>
                <Container fluid>
                    <Row>
                        <Col xl={3} className="d-flex justify-content-end align-items-center">
                            <LeftArrowContainer className="d-flex justify-content-center align-items-center">
                                <LeftArrow>
                                    <box-icon name='left-arrow-circle' color="white" onClick={prevSlide}></box-icon>
                                </LeftArrow>
                                
                            </LeftArrowContainer>
                        </Col>
                        <Col xl={6} lg={8}>
                            <Body>
                                <DormName>{this.state.dormInfo.DORM}</DormName>
                                <Carousel>
                                    
                                    {this.state.images.map((image, index)=>{
                                        return(
                                            <div className={index === this.state.photoIndex ? "slide active": "slide"}>
                                                {index === this.state.photoIndex && (
                                                    <CarouselImg key={index} src={image} alt={`${this.state.dormInfo.DORM}-img`}/>
                                                )}
                                            </div>
                                        )                                             
                                    })}
                                   
                                </Carousel>
                                <Preview>
                                    {this.state.images.map((image, index)=>{
                                        return(
                                            <PreviewImg key={index} src={image} alt={`${this.state.dormInfo.DORM}-img`} onClick={()=> setSlide(index)}/>
                                        )
                                    })}
                                </Preview>
                            </Body>
                        </Col>
                        {/* <Col xl={1} className="d-flex justify-content-start align-items-center">
                            <RightArrowContainer className="d-flex justify-content-center align-items-center">
                                <LeftArrow>
                                    <box-icon color="white" name='right-arrow-circle' onClick={nextSlide}></box-icon>
                                </LeftArrow>
                            </RightArrowContainer>
                        </Col>
                        <Col xl={2}>
                            <ToolBar>
                                <Button onClick={()=>this.state.updateModal()}>X Close</Button>
                            </ToolBar>   
                        </Col> */}
                        <Col xl={3}>
                            <Container fluid>
                                <Row noGutters>
                                    <Col xl={3} className="d-flex justify-content-start align-items-center">
                                        <RightArrowContainer className="d-flex justify-content-center align-items-center">
                                            <LeftArrow>
                                                <box-icon color="white" name='right-arrow-circle' onClick={nextSlide}></box-icon>
                                            </LeftArrow>
                                        </RightArrowContainer>
                                    </Col>
                                    <Col xl={9} className="d-flex justify-content-end">
                                        <div>
                                            <Button onClick={()=>this.state.updateModal()} className="d-flex">
                                                X Close
                                            </Button>
                                        </div>   
                                    </Col>
                                </Row>
                            </Container>                              
                        </Col>
                    </Row>
                </Container>
                

                
            </PageWrapper>
        )
    }
}
