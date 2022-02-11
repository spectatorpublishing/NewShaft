import styled from "styled-components";
import React, { Component } from "react";
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
import BlurbExpander from "../components/BlurbExpander";
import { theme } from "../util/GlobalStyles";
import {NavLink} from "react-router-dom";
import ReviewPageReview from "../components/ReviewPageReview"


var recommend="28%" 
var ranking="#7" 

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
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-end;
  top: -75px;
  @media only screen and (max-width: 767px) {
    top: -130px;
  }
`;

let HeaderMenu = styled.div`
  display: flex; 
  top: -125px;
  margin-right: 30px;
  flex-direction: column;
  position: relative;
`;
let ScrollHeaderMenu = styled(HeaderMenu)`
  margin-bottom: -50px;
  margin-right: 10px; 
  align-items: flex-end;
`

let DormName = styled.h1`
  background-color: ${props => props.theme.columbiaBlue};
  color: ${props => props.theme.white};
  padding: 2vw;
  align-self:flex-start;
  border-radius: 0px 20px 20px 0px;
  pointer-events: initial;
  padding-left: 25vw;
  padding-right: 10vw;
`;

let LinkButton = styled(NavLink)`
      font-size: 15; 
      text-align: center;
      background: #73A6E0;
      color: white;
      border-radius: 7px; 
      justify-content:center; align-self: center;
      padding-top: 10px; padding-bottom: 10px; padding-left: 35px; padding-right: 35px;
`
let MobileDormName = styled(DormName)`
  padding-left: 10vw;
  padding-right: 10vw;
`;
let ScrollDormName = styled.h2`
  background-color: ${props => props.theme.columbiaBlue};
  color: ${props => props.theme.white};
  padding: 1.8vw;
  margin-bottom: 2vw;
  border-radius: 0px 20px 20px 0px;
  pointer-events: initial;
`;

let Blurb = styled.div`
  background-color: ${props => props.theme.white};
  position: relative;
  top: -110px;
  min-height: 40px;
  border-radius: 20px;
  @media only screen and (max-width: 767px) {
    top: -220px;
    margin-bottom: -220px;
    min-height: 80px;
  }
  color:  #707070;
`;

let Title = styled.h2`
    margin-top: 2vw;
    margin-bottom: 1vw;
    font-weight: 900;
    width: 100%;
`
let ReviewContainer = styled.div`
  justify-content: center;
  width: 90%;
    @media(max-width: 700px){
        max-height: 90vh;
    }
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

let Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 10vw 6rem 10vw;
`;

let AdCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
let ColOne = styled.div`
  display: flex;
  width: 15%;
  margin-top: -3.5vw;
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
    top: calc(40px + 30%);
  `};
`

let ScrollAAG = styled(ScrollMenu)`
  display: flex;
  justify-content: center;
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
  "600W116thSt.": "600 W 116th St.",
  "616W116thSt.": "616 W 116th St.",
  "620W116thSt.": "620 W 116th St.",
  "601W110thSt.": "601 W 110th St.",
  "CathedralGardens": "Cathedral Gardens",
  "HewittHall": "Hewitt Hall",
  "ElliotHall": "Elliot Hall",
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
        LOTTERY_NUMS: [],
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
      reviews: [],
      dorm_photos: [],
      relatedArticles: [],
      floorPlans: [],
      floorNames: [],
      relatedDorms : [],
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
    this.fetchRelatedArticles(dormName);
    this.fetchFloorPlans(dormName);
    this.fetchRelatedDorms(dormName);
    this.fetchDormPhotos(dormName);
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
    this.fetchRelatedArticles(newProps.match.params.dorm);
    this.fetchFloorPlans(newProps.match.params.dorm);
    this.fetchRelatedDorms(newProps.match.params.dorm);
    this.fetchDormPhotos(newProps.match.params.dorm);


    window.scrollTo(0, 0)
  }

  fetchDormPhotos(name){
    const dormName = dorm_name_map[name]
    fetch(`/api/getDormPhotos/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormPhotos => {
        this.setState({dorm_photos: Object.values(dormPhotos)})
      });

  }

  fetchDormInfo(name) {
    const dormName = dorm_name_map[name]
    fetch(`/api/getDormInfo/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormInfo => {
        dormInfo.PROS = dormInfo.PROS.substring(0, dormInfo.PROS.length - 1).split(',');
        dormInfo.CONS = dormInfo.CONS.substring(0, dormInfo.CONS.length - 1).split(',');
        let tempLot = dormInfo.LOTTERY_NUMS.split(',');
        let i = 0;
        for(i = 0; i < tempLot.length; i++){
          tempLot[i] = tempLot[i].split(':');
        }
        dormInfo.LOTTERY_NUMS = tempLot;
        document.title = this.state.dormInfo.DORM;
        this.setState({dormInfo: dormInfo});
      });
      
  }

  fetchAmenities(name) {
    const dormName = dorm_name_map[name]
    fetch(`/api/getAmenities/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(amenitiesInfo => {
        this.setState({amenities: amenitiesInfo})
      });
  }

  fetchReviews(name){
    const dormName = dorm_name_map[name]
    fetch(`/api/getReviews/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(reviewsInfo => {
        this.setState({reviews: reviewsInfo.reviews, avg_rating: reviewsInfo.avg_rating, reccomend: reviewsInfo.reccomended, ranking: reviewsInfo.ranking})
      });
  }


  fetchRelatedArticles(name){
    const dormName = dorm_name_map[name]
    fetch(`/api/getRelatedArticles/${dormName}`, {
      method: "GET",
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

  fetchRelatedDorms(name){
    const dormName = dorm_name_map[name]
    fetch(`/api/getRelatedDorms/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    }).then((res=>res.json()))
    .then(relatedDorms => {
      let relDorms = []
      for (let i = 0; i < relatedDorms.length; i++){
        relDorms.push({
          "DORM": relatedDorms[i].RELATED,
          "image": relatedDorms[i].IMAGE
          }
        )
      }
      this.setState({relatedDorms : relDorms})
    })
  }

  fetchFloorPlans(name){
    const dormName = dorm_name_map[name]
    fetch(`/api/getFloorPlans/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(floorPlans => {
        let floorPlan = floorPlans;
        let floor_state = []
        let floor_name  = []
        let keys = Object.keys(floorPlan);
        for (var i = 0; i < keys.length; i++)
        {
          var floorNum = keys[i];
          if (floorPlan[floorNum] == null || keys[i] == "DORM") {
            continue;
          }          
          floor_state[floorNum -1] = 'https://shaft-dorm-floorplans.s3.amazonaws.com/' + floorPlan[floorNum].replace(/ /g, '+')
          floor_name[floorNum -1]= floorPlan[floorNum].slice(0, -4).replace("_", " ");
        }
        return [floor_state, floor_name]
      }).then(floor_vals => {
        this.setState({
          floorPlans: floor_vals[0],
          floorNames: floor_vals[1]
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
    const isMobile = this.state.width <= 768;
    const isMedium = this.state.width <= 1400;
    const headerButtons = {
      fontSize: 15,textAlign: "center",
      background: "#707070BF",color: "white",
      borderRadius: 7,paddingTop: 10, paddingBottom: 10,paddingLeft: 5,paddingRight: 5,
      justifyContent:'center',alignItems: 'center',marginBottom: 15, minWidth: '160px', border: 'none',
    }
    const years_map = {
      "first-years": "Freshman",
      "sophomores": "Sophomore",
      "juniors": "Junior",
      "seniors": "Senior"
    }
    let useReview = this.state.reviews.slice(0,3);
    if (isMobile){useReview = useReview.slice(0,2);}
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
    
    let fullDescription = this.state.dormInfo.DESCRIPTION.substring(0, this.state.dormInfo.DESCRIPTION.length - 1);
    let truncatedDescription = (fullDescription.length > 100) ? fullDescription.substring(0,100) + '...' : null;
    return (
      <ScrollToTop>
        <PhotoBanner bannerImages={this.state.dorm_photos} path={this.props.match.params.dorm}/>
        {!isMobile ? (
        <Header>
          <DormName>{this.state.dormInfo.DORM}</DormName>
          <HeaderMenu>           
            <NavLink style = {headerButtons} to={`/explore/${Object.keys(dorm_name_map).find(key => dorm_name_map[key] === this.state.dormInfo.DORM)}`}>See Photos</NavLink>
            <NavLink style = {headerButtons} to="/reviews">Read More Reviews</NavLink>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLfk7KE8fHSh117X4AhVKU-KJkJsvWjbvlW5mcwwbx08es0w/viewform" style={headerButtons}>Submit a Review</a>
          </HeaderMenu>
        </Header>) : (
        <Header><MobileDormName>{this.state.dormInfo.DORM}</MobileDormName></Header>)}
        {(isMobile && truncatedDescription) ? 
          <BlurbExpander 
            custom={{
              boxStyle: `
                background-color: ${theme.white};
                position: relative;
                top: -100px;
                min-height: 40px;
                margin: 10 5% -15px 30%;
                padding: 1.8vw;
                border: none;
                @media only screen and (max-width: 767px) {
                  top: -100px;
                  margin-bottom: -125px;
                  min-height: 80px;
                }
              `,
              textColor: "#707070",
            }} 
            showAll={fullDescription}
            showSome={truncatedDescription}
          />
        :
          null
        }
        <Body>
          {!isMobile && <ColOne>
            <ScrollMenu 
              ref={this.scrollMenuRef} 
              isFixed={this.state.scrollMenuFixed}
            >
              {(this.state.scrollMenuFixed)?<ScrollDormName>{this.state.dormInfo.DORM}</ScrollDormName>:null}
              <Scroller compRef={this.amenitiesRef} label={"Amenities"} />
              <Scroller compRef={this.proconRef} label={"Pros and Cons"} />
              <Scroller compRef={this.floorplansRef} label={"Floor Plans"} />
              <Scroller compRef={this.reviewsRef} label={"Reviews"} />
              <Scroller compRef={this.locationRef} label={"Location"} />
              <Scroller compRef={this.suggestionsRef} label={"Related Dorms"} />            
              <Scroller compRef={this.spectrumRef} label={"Spectrum"} />            
            </ScrollMenu>
          </ColOne>
          }

          <ColTwo mobile={isMobile}>
          {(!isMobile)?<Blurb>{fullDescription}</Blurb>:null}
            {isMobile && (
              <Margin>
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                lottery={this.state.dormInfo.LOTTERY_NUMS}
              />
              </Margin>
            )}
            
            <ScrollerTarget ref={this.amenitiesRef}>
              <Margin>
                <Amenities amenities={this.state.amenities}/>
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

            <AdCenter style = {{marginBottom: 25,marginTop: 25 }}><AdManager name = "shaftleader" mobile = {isMedium}/></AdCenter>
            
            <ScrollerTarget ref={this.floorplansRef}>
              <Margin>
                <FloorPlan
                  floorOffset={0}
                  planArray={this.state.floorPlans}
                  planNames={this.state.floorNames}
                />
              </Margin>
            </ScrollerTarget>

            <ScrollerTarget ref={this.reviewsRef}>
              <Margin>
              <Title>Reviews</Title>
              <ReviewContainer>
                  {useReview.map((review, j) => (
                      <ReviewPageReview
                        key={""+j}
                        stars={review.NUM_STARS}
                        review={review.REVIEW_TXT}
                        room={review.ROOM_NUM}
                        year={years_map[review.YEAR]}
                        timestamp={review.TIMESTAMP}
                        dorm = {this.state.dorm}
                        recommended = {review.RECOMMEND}
                        thumbs_up = {review.THUMBS_UP}
                        thumbs_down = {review.THUMBS_DOWN}
                      />
                  ))}
                  <LinkButton to="/reviews">Read More Reviews</LinkButton>
              </ReviewContainer>   
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

            <AdCenter style = {{marginBottom: 25,marginTop: 25 }}><AdManager name = "cds_leaderboard" mobile = {isMedium}/></AdCenter>
            
            <ScrollerTarget ref={this.suggestionsRef}>
              <Margin>
                <Title>Related Dorms</Title>
                {(this.state.relatedDorms.length == 0)? null : 
                <RelatedDorms
                  name={this.state.dormInfo.DORM}
                  relatedDorms={this.state.relatedDorms}
                />}
              </Margin>
            </ScrollerTarget>

            <ScrollerTarget ref={this.spectrumRef}>
              <Margin>
                <Title>Spectrum on Housing</Title>
                {(this.state.relatedArticles.length == 0)? null : <SpectrumSidebar spectrumSidebarData = {this.state.relatedArticles}/>}  
              </Margin>
              
            </ScrollerTarget>

            
          
          </ColTwo>

          {!isMobile && (
            <ScrollAAG isFixed={this.state.scrollMenuFixed}>
              {(this.state.scrollMenuFixed)?
                <ScrollHeaderMenu>           
                  <NavLink style = {headerButtons} to="/explore">See Photos</NavLink>
                  <NavLink style = {headerButtons} to="/reviews">Read More Reviews</NavLink>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLfk7KE8fHSh117X4AhVKU-KJkJsvWjbvlW5mcwwbx08es0w/viewform" style={headerButtons}>Submit a Review</a>
              </ScrollHeaderMenu>
              :null}
              <AtAGlance
                location={this.state.dormInfo.ADDRESS}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.CLASS_MAKEUP}
                lottery={this.state.dormInfo.LOTTERY_NUMS}
              />
            </ScrollAAG>
          )}
        </Body>
      </ScrollToTop>
    );
  }
}
