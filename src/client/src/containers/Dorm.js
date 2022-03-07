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
import PhotoGallery from "../components/PhotoGallery";

let DormHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 1.5rem 0;
  margin: 4rem 0 0 0;
`

let DormName = styled.h1`
  font-family: 'Georgia', sans-serif;
  font-style: regular;
  font-weight: 42;
  display: flex;
  color: #404040;
  align-self: center;
`;

let UnderlineWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: -.5rem;
`

let Underline = styled.hr`
  width: 45%;
  border: .01rem solid #404040;
  align-self: center;
`

let Dot = styled.span`
  height: 6px;
  width: 6px;
  background-color: #404040;
  border-radius: 50%;
  align-self: center;
  margin: .5rem;
`

let DormImage = styled.div`
  display: flex;
  align-self: center;
`;

let Page = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.darkGray};
  padding: 2rem;
`

let Info = styled.div`
  display: flex;
  flex-direction: row;
`

let ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  width: 75%;
`

let ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 25%;
`
let Sticky = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid ${props => props.theme.lightGray};
  margin-bottom: 2rem;
`

let InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.lightGray};
`

let SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 48;
  margin-bottom: 2rem;
  color: #707070;
`;

let StickyTitle = styled.h3`
`

let MarginWrapper = styled.div`
  margin-left: 1rem;
`;

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
      width: screen_width,
      isOpen: false
    };
    
  }

  componentDidMount() {
    // This will not fetch the right data for all dorms need to pass the data correctly into the dorm
    var dormName = this.props.match.params.dorm;
    this.fetchDormInfo(dormName);
    this.fetchAmenities(dormName);
    this.fetchReviews(dormName);
    this.fetchRelatedArticles(dormName);
    this.fetchFloorPlans(dormName);
    this.fetchRelatedDorms(dormName);
    this.fetchDormPhotos(dormName);
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
    
    const { isOpen } = this.state;
    const updateModal = () =>{
      this.setState({ isOpen: false})
    }

    return (
      <Page>
        <DormHeader>
          <DormName> {this.state.dormInfo.DORM} </DormName>
          <UnderlineWrapper>
            <Underline></Underline>
            <Dot></Dot>
            <Underline></Underline>
          </UnderlineWrapper>
        </DormHeader>
        
        <DormImage>
          <img src="https://housing.columbia.edu/sites/default/files/content/img/Buildings/Furnald/FurnaldHall.jpg"></img>
        </DormImage>
        <Info>
          <ColumnLeft> 
            <InfoSection>
              <SectionTitle>Description</SectionTitle>
              <MarginWrapper>{fullDescription}</MarginWrapper>
            </InfoSection>
            <InfoSection>
              <SectionTitle>AMENITIES</SectionTitle>
            </InfoSection>
            <InfoSection>
              <ProCon
                  pros={this.state.dormInfo.PROS}
                  cons={this.state.dormInfo.CONS}
              />
            </InfoSection>
            <InfoSection>
              <SectionTitle>FLOOR PLANS</SectionTitle>
            </InfoSection>
            <InfoSection>
              <SectionTitle>Location</SectionTitle>
              <MarginWrapper>
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
              </MarginWrapper>
            </InfoSection>
            <InfoSection>
              <SectionTitle>PHOTO GALLERY</SectionTitle>
            </InfoSection>
            <InfoSection>
              <SectionTitle>Spectrum on Housing</SectionTitle>
              {(this.state.relatedArticles.length == 0)? null : <SpectrumSidebar spectrumSidebarData = {this.state.relatedArticles}/>}
            </InfoSection>
          </ColumnLeft>
          <ColumnRight> 
            <Sticky>
              <StickyTitle>AT-A-GLANCE</StickyTitle>
            </Sticky>
            <Sticky>
              <StickyTitle>QUICK REVIEW</StickyTitle>
            </Sticky>
          </ColumnRight>
        </Info>
      </Page>
    );
  }
}
