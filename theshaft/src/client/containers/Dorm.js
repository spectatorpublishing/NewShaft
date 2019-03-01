import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoBanner from "../components/PhotoBanner";
import Amenities from "../components/Amenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import FloorPlan from "../components/FloorPlan";
import RelatedDorms from "../components/RelatedDorms";
import ReviewsBox from "../components/ReviewsBox";
import Scroller from "../components/Scroller";
import SpectrumSidebar from "../components/SpectrumSidebar";




var stars="4.5" 
var recommend="28%" 
var ranking="#7" 

var reviews = [
  {
    stars: 4,
    text: "It's on Frat Row, so it’s super loud. It’s also right outside the lounge, which gets pretty loud.",
    room: "Room 203A",
    year: "Freshman",
    timestamp: "12 days ago"
  },
  {
    stars: 4,
    text: "nice",
    room: "Room 203A",
    year: "Freshman",
    timestamp: "12 days ago"
  },
  {
    stars: 4,
    text: "nice",
    room: "Room 203A",
    year: "Freshman",
    timestamp: "12 days ago"
  },
  {
    stars: 4,
    text: "nice",
    room: "Room 203A",
    year: "Freshman",
    timestamp: "12 days ago"
  }
]

let relatedDorms = [
  {
    DORM: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
  },
  {
    DORM: "Furnald Hall",
    image: "https://housing.columbia.edu/files/housing/Furnald.jpg",
  },
];

const bannerImages = [
  "https://blog.ocm.com/wp-content/uploads/2017/08/Kiss-Pleat_Gray_Main_Alt_Exp.jpg",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
];

let Header = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  margin: 0 15%;
  pointer-events: none;
`;
let DormName = styled.h1`
  color: ${props => props.theme.white};
  ${props => props.theme.textShadow}
  pointer-events: initial;
`;

let Blurb = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
  color: white;
  position: relative;
  top: -100px;
  margin: 0 15% -100px 15%;
  padding: 1.8vw;
  border-radius: 1.5vw;
`;

let Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 10vw 6rem 10vw;
`;

let ColOne = styled.div`
  display: flex;
  width: 25%;
`;

let ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: ${({ mobile }) => (mobile ? `100%` : `50%`)};
`;

let ColThree = styled.div`
  display: flex;
  width: 35%;
  margin-left: 5vw;
`;

let ScrollMenu = styled(ColOne)`
  flex-direction: column;
  left: 0;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};

  // 80px = 60px (navbar height) + 20px (padding 
  // which matches the value added in handleScroll())
  ${({ isFixed }) => isFixed && `
    top: 80px;
  `};
`
const dorm_name_map = {
  "CarmanHall": "Carman Hall",
  "McBainHall": "McBain Hall",
  "47Claremont": "47 Claremont",
  "600W113th": "600 W 113th",
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
  "WoodbridgeHall": "Woodbridge Hall"

}

let Margin = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`

export default class Dorm extends React.PureComponent {
  constructor(props) {
    super(props);
    let screen_width = window.innerWidth;
    this.amenitiesRef = React.createRef();
    this.proconRef = React.createRef();
    this.floorplansRef = React.createRef();
    this.reviewsRef = React.createRef();
    this.locationRef = React.createRef();
    this.spectrumRef = React.createRef();
    this.suggestionsRef = React.createRef();
    this.scrollMenuRef = React.createRef();
    this.state = {
      dormInfo: {
        DORM: "",
        ADDRESS: "",
        DESCRIPTION: "",
        COLLEGE: "",
        THUMBNAIL_IMAGE: "",
        SUITE: "",
        WALKTHROUGH: "",
        SINGLE_: "",
        DOUBLE_: "",
        TRIPLE_: "",
        CLASS_MAKEUP: "",
        PROS: ["pro1", "pro2", "pro3"],
        CONS: ["con1", "con2", "con3"],
        LATITUDE: 0,
        LONGITUDE: 0,
        RELATEDDORMS: relatedDorms
      },
      amenities: {
        P_BATHROOM: 0,
        LAUNDRY: 0,
        CARPET: 0,
        F_KITCHEN: 0,
        P_KITCHEN: 0,
        LOUNGE: 0,
        GYM: 0,
        BIKE: 0,
        COMPUTER: 0,
        PRINT:0,
        AC: 0,
        MUSIC: 0
      },
      reviews: {},
      scrollMenuFixed: false,
      scrollMenuOffset: null,
      width: screen_width
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.isFixed = this.isFixed.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener('scroll', this.handleScroll);
    // This will not fetch the right data for all dorms need to pass the data correctly into the dorm
    var dormName = this.props.match.params.dorm;
    this.fetchDormInfo(dormName);
    this.fetchAmenities(dormName);
    this.fetchReviews(dormName);
    //this.fetchDormInfo(dorm_name_map[this.props.match.params.dorm])
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps){
    //map spaceless dorm names to spacy names
    this.fetchDormInfo(newProps.match.params.dorm)
    this.fetchAmenities(newProps.match.params.dorm)
    this.fetchReviews(newProps.match.params.dorm)
    window.scrollTo(0, 0)
  }

  fetchDormInfo(name) {
    const dormName = dorm_name_map[name]
    fetch('/api/getDormInfo', {
      method: "POST",
      body: JSON.stringify({ 
        table: "dorm_static_info",
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormInfo => {
        console.log(dormInfo)
        dormInfo[0].PROS = ["Pro 1", "Pro 2", "Pro 3"];
        dormInfo[0].CONS = ["Con 1", "Con 2", "Con 3"];
        this.setState({dormInfo: dormInfo[0]})
      });
  }

  fetchAmenities(name) {
    const dormName = dorm_name_map[name]
    fetch('/api/getAmenities', {
      method: "POST",
      body: JSON.stringify({ 
        table: "dorm_static_info",
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(amenitiesInfo => {
        this.setState({amenities: amenitiesInfo[0]})
      });
  }

  fetchReviews(name){
    const dormName = dorm_name_map[name]
    fetch('/api/getReviews', {
      method: "POST",
      body: JSON.stringify({ 
        table: "dorm_static_info",
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(reviewsInfo => {
        console.log(reviewsInfo)
        this.setState({reviews: reviewsInfo})
      });
  }


  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleScroll(e) {
    if (this.state.width > 700) {
      // Add 20px to give a little bit of padding on top between the navbar and the menu
      this.isFixed(e.target.scrollingElement.scrollTop + 20);
    }
  }

  isFixed(scrollPosition) {
    // If the menu isn't fixed, we should save the offset value before fixing
    // the menu in place because otherwise we will lose access to this value.
    // If the menu is already fixed, we should used the saved offset value
    // because the fixed menu will otherwise calculate a different offset value.
    // Subtract 60 from the offset value to account for the navbar height (60px).
    let top = this.state.scrollMenuOffset || this.scrollMenuRef.current.offsetTop - 60;
    if (this.state.scrollMenuFixed) {
      if (scrollPosition < top) {
        this.setState({
          scrollMenuFixed: false,
          scrollMenuOffset: null
        });
      }
    }
    else {
      if (scrollPosition >= top) {
        this.setState({
          scrollMenuFixed: true,
          scrollMenuOffset: top
        });
      }
    }
  }

  render() {
    // Use ref forwarding so Scroller component can directly access the DOM nodes
    const ScrollerTarget = React.forwardRef((props, ref) => (
      <div ref={ref}>
        {props.children}
      </div>
    ));
    const isMobile = this.state.width <= 700;
    let roomtype = "";
    if (this.state.dormInfo.SUITE.length != 0) {
      roomtype += "Suite-style";
      if (this.state.dormInfo.SINGLE_ && this.state.dormInfo.DOUBLE_)
        roomtype += " singles and doubles";
      else if (this.state.dormInfo.SINGLE_) roomtype += " singles";
      else if (this.state.dormInfo.DOUBLE_) roomtype += " doubles";
    } else if (this.state.dormInfo.WALKTHROUGH)
      roomtype += "Doubles and walkthrough doubles";
    else {
      if (this.state.dormInfo.SINGLE_ && this.state.dormInfo.DOUBLE_)
        roomtype += "Singles and doubles";
      else if (this.state.dormInfo.SINGLE_) roomtype += "Singles";
      else if (this.state.dormInfo.DOUBLE_) roomtype += "Doubles";
    }
    if (this.state.dormInfo.TRIPLE_) roomtype += " and triples";
    return (
      <div>
        <PhotoBanner bannerImages={bannerImages} />
        <Header>
          <DormName>{this.state.dormInfo.DORM}</DormName>
        </Header>
        <Blurb>{this.state.dormInfo.DESCRIPTION}</Blurb>

        <Body>
          {!isMobile && <ColOne>
            <ScrollMenu 
              ref={this.scrollMenuRef} 
              isFixed={this.state.scrollMenuFixed}
            >
              <Scroller compRef={this.amenitiesRef} label={"Amenities"} />
              <Scroller compRef={this.locationRef} label={"Location"} />
              <Scroller compRef={this.proconRef} label={"Pros and Cons"} />
              <Scroller compRef={this.floorplansRef} label={"Floor Plans"} />
              <Scroller compRef={this.reviewsRef} label={"Reviews"} />
              {/* <Scroller compRef={this.spectrumRef} label={"Spectrum"} /> */}
              <Scroller compRef={this.suggestionsRef} label={"Related Dorms"} />
            </ScrollMenu>
          </ColOne>
          }

          <ColTwo mobile={isMobile}>
            {isMobile && (
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                numfloors="13"
              />
            )}
            <Margin>
              <ScrollerTarget ref={this.amenitiesRef}>
                <Amenities amenities={this.state.amenities}/>
              </ScrollerTarget>
            </Margin>
            
            <Margin>
              <ScrollerTarget ref={this.locationRef}>
                <Maps
                  latitudes={[this.state.dormInfo.LATITUDE]}
                  longitudes={[this.state.dormInfo.LONGITUDE]}
                  popupInfo={[this.state.dormInfo.DORM]}
                  popupId={[this.state.dormInfo.DORM]}
                  centerLatitude={this.state.dormInfo.LATITUDE}
                  centerLongitude={this.state.dormInfo.LONGITUDE}
                  width={"100%"}
                  height={"300px"}
                />
              </ScrollerTarget>
            </Margin>

            <Margin>
              <ScrollerTarget ref={this.proconRef}>
                <ProCon
                  pros={this.state.dormInfo.PROS}
                  cons={this.state.dormInfo.CONS}
                />
              </ScrollerTarget>
            </Margin>
            
            <Margin>
            <ScrollerTarget ref={this.floorplansRef}>
              <FloorPlan
                floorOffset={1}
                planArray={[
                  "https://housing.columbia.edu/files/housing/Wien%208_2018.jpg",
                  "https://housing.columbia.edu/files/housing/Wien%208_2018.jpg",
                  "https://housing.columbia.edu/files/housing/600%209_2016_0.jpg",
                  "https://housing.columbia.edu/files/housing/Woodbridge%204_2018.jpg",
                  "https://i.kym-cdn.com/entries/icons/original/000/026/642/kot1.jpg"
                ]}
              />
            </ScrollerTarget>
            </Margin>

            <Margin>
            <ScrollerTarget ref={this.reviewsRef}>
              <ReviewsBox
                stars={stars}
                recommend={recommend}
                ranking={ranking}
                reviews={this.state.reviews}>
              </ReviewsBox>
            </ScrollerTarget>
            </Margin>

            <Margin>
            <ScrollerTarget ref={this.suggestionsRef}>
              <RelatedDorms
                name={this.state.dormInfo.DORM}
                relatedDorms={relatedDorms}
              />
            </ScrollerTarget>
            </Margin>

            <Margin>
            <ScrollerTarget ref={this.spectrumRef}>
              <SpectrumSidebar
                spectrumSidebarData = {[
                  {
                    title: "How Have Local Hiring Targets Shaped Columbia’s Manhattanville Construction Site?", 
                    img_src: "https://www.gstatic.com/webp/gallery/1.jpg", 
                    author: "BY YULONG LI",
                    date: "APRIL 8, 2018"
                  },
                  {
                    title: "Newly proposed committee for Barnard calls for increased transparency", 
                    img_src: "https://www.gstatic.com/webp/gallery/3.jpg", 
                    author: "BY ROUNAK",
                    date: "APRIL 7, 2018"
                  }
                ]}
              />
            </ScrollerTarget>
            </Margin>

          </ColTwo>

          {!isMobile && (
            <ColThree>
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                numfloors="13"
              />
            </ColThree>
          )}
        </Body>
      </div>
    );
  }
}
