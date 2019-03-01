import styled from "styled-components";
import React, { Component } from "react";
import { withRouter } from 'react-router';
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
import ScrollToTop from "../components/ScrollToTop";
import AdManager from "../components/AdManager";

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

let Header = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  margin: 0 15%;
  pointer-events: none;
  @media only screen and (max-width: 767px) {
    top: -220px;
  }
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
  min-height: 40px;
  margin: 0 15% -100px 15%;
  padding: 1.8vw;
  border-radius: 1.5vw;
  @media only screen and (max-width: 767px) {
    top: -220px;
    margin-bottom: -220px;
    min-height: 80px;
  }
`;

let Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 10vw 6rem 10vw;
`;

let ColOne = styled.div`
  display: flex;
  width: 15%;
`;

let ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: ${({ mobile }) => (mobile ? `100%` : `60%`)};
`;

let ScrollMenu = styled(ColOne)`
  flex-direction: column;
  left: 0;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};

  // 60px matches the value added in handleScroll())
  ${({ isFixed }) => isFixed && `
    top: calc(60px + 20%);
  `};
`

let ScrollAAG = styled(ScrollMenu)`
  display: flex;
  padding-right: 20px;
  left: initial;
  right: 0;
  width: 25%;
`

let Margin = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
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
      dorm_photos: [],
      relatedArticles: [],
      floorPlans: [],
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
    //this.fetchRelatedArticles(dormName);
    //this.fetchFloorPlans(dormName);
    this.fetchDormPhotos(dormName);
    //this.fetchDormInfo(dorm_name_map[this.props.match.params.dorm])
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps){
    //map spaceless dorm names to spacy names
    this.fetchDormInfo(newProps.match.params.dorm);
    this.fetchAmenities(newProps.match.params.dorm);
    this.fetchReviews(newProps.match.params.dorm);
    //this.fetchRelatedArticles(newProps.match.params.dorm);
    //this.fetchFloorPlans(newProps.match.params.dorm);
    this.fetchDormPhotos(newProps.match.params.dorm);


    window.scrollTo(0, 0)
  }

  fetchDormPhotos(name){
    const dormName = dorm_name_map[name]
    fetch('/api/getDormPhotos', {
      method: "POST",
      body: JSON.stringify({ 
        table: "dorm_static_info",
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormPhotos => {
        this.setState({dorm_photos: Object.values(dormPhotos[0])})
      });

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
        dormInfo[0].PROS = dormInfo[0].PROS.substring(1, dormInfo[0].PROS.length - 1).split(',');
        dormInfo[0].CONS = dormInfo[0].CONS.substring(1, dormInfo[0].CONS.length - 1).split(',');
        this.setState({dormInfo: dormInfo[0]});
        document.title = this.state.dormInfo.DORM;

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
        this.setState({reviews: reviewsInfo.reviews, avg_rating: reviewsInfo.avg_rating, reccomend: reviewsInfo.reccomended, ranking: reviewsInfo.ranking})
      });
  }


  fetchRelatedArticles(name){
    const dormName = dorm_name_map[name]
    fetch('/api/getRelatedArticles', {
      method: "POST",
      body: JSON.stringify({ 
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(relatedArticles => {
        var relArticles = [];
        for (var i = 0; i < relatedArticles.length; i++)
        {
          relArticles.push({
            title: relatedArticles[i].TITLE, 
            img_src: relatedArticles[i].IMAGE_URL, 
            author: relatedArticles[i].AUTHOR,
            date: relatedArticles[i].DATE,
            url: relatedArticles[i].RELATED
          })
        }
        this.setState({relatedArticles: relArticles})
      });
  }

  fetchFloorPlans(name){
    const dormName = dorm_name_map[name]
    fetch('/api/getFloorPlans', {
      method: "POST",
      body: JSON.stringify({ 
        DORM: dormName
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(floorPlans => {
        var floorPlan = floorPlans[0];
        var floor_state = []
        var keys = Object.keys(floorPlan);
        for (var i = 0; i < keys.length; i++)
        {
          var floorNum = keys[i];
          if (floorPlan[floorNum] == null || keys[i] == "DORM") {
            continue;
          }
          floor_state[floorNum - 1] = "http://localhost:8080/floor_plans/" + floorPlan[floorNum];
        }
        return floor_state
      }).then(thing => {
        this.setState({
          floorPlans: thing
        });
      })
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleScroll(e) {
    if (this.state.width > 700) {
      // Add 20px to give a little bit of padding on top between the navbar and the menu
      this.isFixed(e.target.scrollingElement.scrollTop + window.innerHeight * 0.2);
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
      <ScrollToTop>
        <PhotoBanner bannerImages={this.state.dorm_photos} />
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
              <Scroller compRef={this.suggestionsRef} label={"Related Dorms"} />
              <Scroller compRef={this.spectrumRef} label={"Spectrum"} />
            </ScrollMenu>
          </ColOne>
          }

          <ColTwo mobile={isMobile}>
            {isMobile && (
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                cutoff={this.state.dormInfo.LOTTERY_NUMS}
              />
            )}
            <ScrollerTarget ref={this.amenitiesRef}>
              <Margin>
                <Amenities amenities={this.state.amenities}/>
              </Margin>
            </ScrollerTarget>
            
            <ScrollerTarget ref={this.locationRef}>
              <Margin>
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
              </Margin>
            </ScrollerTarget>

            <ScrollerTarget ref={this.proconRef}>
              <Margin>
                <ProCon
                  pros={this.state.dormInfo.PROS}
                  cons={this.state.dormInfo.CONS}
                />
              </Margin>
            </ScrollerTarget>
            
            {/*<ScrollerTarget ref={this.floorplansRef}>
              <Margin>
                <FloorPlan
                  floorOffset={0}
                  planArray={this.state.floorPlans}
                />
              </Margin>
            </ScrollerTarget>*/}

            <ScrollerTarget ref={this.reviewsRef}>
              <Margin>
                <ReviewsBox
                  stars={this.state.avg_rating}
                  recommend={this.state.reccomend}
                  ranking={this.state.ranking}
                  reviews={this.state.reviews}>
                </ReviewsBox>
              </Margin>
            </ScrollerTarget>

            <ScrollerTarget ref={this.suggestionsRef}>
              <Margin>
                <RelatedDorms
                  name={this.state.dormInfo.DORM}
                  relatedDorms={relatedDorms}
                />
              </Margin>
            </ScrollerTarget>

            <ScrollerTarget ref={this.spectrumRef}>
              <Margin>
                 <SpectrumSidebar spectrumSidebarData = {this.state.relatedArticles}/>
              </Margin>
            </ScrollerTarget>

            <AdManager/>

          </ColTwo>

          {!isMobile && (
            <ScrollAAG isFixed={this.state.scrollMenuFixed}>
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                cutoff={this.state.dormInfo.LOTTERY_NUMS}
              />
            </ScrollAAG>
          )}
        </Body>
      </ScrollToTop>
    );
  }
}
