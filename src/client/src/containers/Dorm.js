import styled from "styled-components/macro";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PhotoBanner from "../components/PhotoBanner";
import Amenities from "../components/Amenities";
import NewAmenities from "../components/NewAmenities";
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
import { NavLink } from "react-router-dom";
import ReviewPageReview from "../components/ReviewPageReview"
import PhotoGallery from "../components/PhotoGallery";

let DormHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 1.5rem 0;

  @media only screen and (max-width: 767px) {
		padding: 1.5rem 0 0 0;
    margin: 0;
	}
`

let DormName = styled.h1`
  font-family: 'Georgia', sans-serif;
  font-style: regular;
  font-weight: 42;
  display: flex;
  color: #404040;
  align-self: center;

  @media only screen and (max-width: 767px) {
    font-style: normal;
		font-weight: normal;
    font-size: 40px;
	}
`;

let UnderlineWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: -.5rem;

  @media only screen and (max-width: 767px) {
		width: 60%;
	}
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


  @media only screen and (max-width: 767px) {
		margin: .8rem;
	}
`

let DormImage = styled.div`
  display: flex;
  align-self: center;
  width: 90vw;
  height: 80vh;
  
  @media only screen and (max-width: 767px) {
		height: 40vh;
    width: auto;
	}
`;

let Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
  @media only screen and (max-width: 767px) {
    height: 40vh;
		object-fit: cover;
    object-position: center bottom;
	}
`;

let Page = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.darkGray};
  padding: 2rem;

  @media only screen and (max-width: 767px) {
    padding: .5rem;
		overflow: hidden;
	}
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
  margin: 2rem;
  margin-bottom: 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.lightGray};

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    line-height: 1rem;
    padding: 0 0 1.5rem 0;
    margin: 1rem 3rem 1rem 2rem;
    background-color: light-blue;
	}
`

let SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 48;
  margin-bottom: 2rem;
  color: #707070;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 1rem;
	}
`;

let StickyTitle = styled.h3`
`

let MarginWrapper = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 767px) {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
	}
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
  "PlimptonHall": "Plimpton Hall"
}

const Dorm = ({ }) => {
  const { dorm } = useParams();
  const [width, setScreenWidth] = useState(window.innerWidth);
  const [dormInfo, setDormInfo] = useState({});
  const [amenities, setAmenities] = useState({});
  const [reviews, setReviews] = useState([]);
  const [dorm_photos, setDormPhotos] = useState([]);
  const [relatedArticles, setrelatedArticles] = useState([]);
  const [floorPlans, setFloorPlans] = useState([]);
  const [floorNames, setFloorNames] = useState([]);
  const [floorOffset, setFloorOffset] = useState([]);
  const [relatedDorms, setRelatedDorms] = useState([]);
  const [scrollMenuFixed, setScrollMenuFixed] = useState(false);
  const [scrollMenuOffset, setScrollMenuOffset] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fullDescription, setFullDescription] = useState("");
  const [roomtype, setRoomType] = useState("");
  const [classMakeupFormat, setClassMakeup] = useState("");
  const [dormStyle, setDormStyle] = useState("");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const dormName = dorm.replaceAll("-", " ");
    console.log(dormName)
    fetchDormInfo(dormName);
    getDormAmenities(dormName);
    //fetchReviews(dormName);
    fetchRelatedArticles(dormName);
    fetchFloorPlans(dormName);
    //fetchRelatedDorms(dormName);
    fetchDormPhotos(dormName);
  }, []);

  function fetchDormPhotos(dormName){
    fetch(`/api/getDormPhotos/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(dormPhotos => {
        //console.log(dormPhotos);
        setMainImage(dormPhotos[0]["IMAGE_LINK"]);
        var dormPics = [];
        for (var i = 0; i < dormPhotos.length; i++) {
          dormPics.push(dormPhotos[i]["IMAGE_LINK"]);
        }
        //console.log(dormPics);
        //setDormPhotos(dormPics)
      }).catch(error => {
        console.log(error);
      });
  }

  async function fetchDormInfo(dormName) {
    fetch(`/api/getDormInfo/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(dormInfo => {
        dormInfo.PROS = dormInfo.PROS.substring(0, dormInfo.PROS.length - 1).split(',');
        dormInfo.CONS = dormInfo.CONS.substring(0, dormInfo.CONS.length - 1).split(',');
        let tempLot = dormInfo.LOTTERY_NUMS.split(',');
        let i = 0;
        for (i = 0; i < tempLot.length; i++) {
          tempLot[i] = tempLot[i].split(':');
        }
        dormInfo.LOTTERY_NUMS = tempLot;
        document.title = dormInfo.DORM;
        //console.log(dormInfo);
        setDormInfo(dormInfo);

        setFullDescription(dormInfo.DESCRIPTION.substring(0, dormInfo.DESCRIPTION.length - 1));
        setClassMakeup(dormInfo.CLASS_MAKEUP.split(",").map((el, i) => el.charAt(0).toUpperCase() + el.slice(1)).join(", "));
        setDormStyle((dormInfo.SUITE_ === 1) ? "Suite-Style" : "Corridor-Style");
        setRoomTypeString();
      }).catch(error => {
        console.log(error);
      });
  }

  async function getDormAmenities(dormName) {
    fetch(`/api/getAmenities/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(amenitiesInfo => {
        //console.log(amenitiesInfo)
        
        setAmenities(amenitiesInfo);
      }).catch(error => {
        console.log(error);
      });
  }

  async function fetchReviews(dormName) {
    fetch(`/api/getReviews/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(reviewsInfo => {
        //console.log(reviewsInfo);
        setReviews({ reviews: reviewsInfo.reviews, avg_rating: reviewsInfo.avg_rating, reccomend: reviewsInfo.reccomended, ranking: reviewsInfo.ranking });
      }).catch(error => {
        console.log(error);
      });
  }

  function fetchRelatedArticles(dormName) {
    fetch(`/api/getRelatedArticles/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(relatedArticles => {
        var relArticles = [];
        for (var i = 0; i < relatedArticles.length; i++) {
          relArticles.push({
            title: relatedArticles[i].TITLE,
            img_src: relatedArticles[i].IMAGE_URL,
            author: relatedArticles[i].AUTHOR,
            date: relatedArticles[i].DATE,
            url: relatedArticles[i].RELATED
          });
        }
        //console.log(relArticles);
        setrelatedArticles(relArticles);
      }).catch(error => {
        console.log(error);
      });
  }

  function fetchRelatedDorms(dormName) {
    fetch(`/api/getRelatedDorms/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res => res.json()))
      .then(relatedDorms => {
        let relDorms = [];
        for (let i = 0; i < relatedDorms.length; i++) {
          relDorms.push({
            "DORM": relatedDorms[i].RELATED,
            "image": relatedDorms[i].IMAGE
          }
          );
        }
        //console.log(relDorms);
        setRelatedDorms(relDorms);
      }).catch(error => {
        console.log(error);
      });
  }

  function fetchFloorPlans(dormName) {
    fetch(`/api/getFloorPlans/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(floorPlans => {
        let floorPlan = floorPlans;
        let floor_state = [];
        let floor_name = [];
        let floor_offset = 1;
        let keys = Object.keys(floorPlan);

        for (var i = 0; i < keys.length; i++) {
          var floorNum = keys[i];
          console.log(floorNum + ":" + floorPlan[floorNum])
          if (floorPlan[floorNum] == null || keys[i] == "DORM") {
            if (floor_state.length == 0){
              floor_offset++;
            }
            continue;
          }
          floor_state[floorNum] = 'https://shaft-dorm-floorplans.s3.amazonaws.com/' + floorPlan[floorNum].replace(/ /g, '+');
          floor_name[floorNum] = floorPlan[floorNum].slice(0, -4).replace("_", " ");
          console.log(floor_state[floorNum])
          console.log(floor_name[floorNum])
        }

        return [floor_state, floor_name, floor_offset];
      }).then(floor_vals => {
        console.log(floor_vals);
        setFloorPlans(floor_vals[0]);
        setFloorNames(floor_vals[1]);
        setFloorOffset(floor_vals[2]);
      }).catch(error => {
        console.log(error);
      });
  }

  const setRoomTypeString = () => {
    var roomtype = "";

    if (dormInfo.WALKTHROUGH) {
      roomtype += "Doubles and walkthrough doubles";
    } else {
      if (dormInfo.SINGLE_ && dormInfo.DOUBLE_ && dormInfo.TRIPLE_) {
        roomtype += " Singles, doubles, and triples";
      } else if (dormInfo.SINGLE_ && dormInfo.DOUBLE_) {
        roomtype += " Singles and doubles";
      } else {
        if (dormInfo.SINGLE_) roomtype += "Singles";
        if (dormInfo.DOUBLE_) roomtype += "Doubles";
        if (dormInfo.TRIPLE_) roomtype += " and triples";
      }
    }

    setRoomType(roomtype);
  }
  // Use ref forwarding so Scroller component can directly access the DOM nodes
  /* const ScrollerTarget = React.forwardRef((props, ref) => (
    <div ref={ref}>
      {props.children}
    </div>
  ));  */
  const isMobile = width <= 768;
  const isMedium = width <= 1400;
  const headerButtons = {
    fontSize: 15, textAlign: "center",
    background: "#707070BF", color: "white",
    borderRadius: 7, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5,
    justifyContent: 'center', alignItems: 'center', marginBottom: 15, minWidth: '160px', border: 'none',
  }
  const years_map = {
    "first-years": "Freshman",
    "sophomores": "Sophomore",
    "juniors": "Junior",
    "seniors": "Senior"
  }

  if (isMobile) {
    return (
      <Page>
          <DormImage>
            <img src={mainImage}></img>
          </DormImage>

          <DormHeader>
            <DormName> {dormInfo.DORM} </DormName>
            <UnderlineWrapper>
              <Underline></Underline>
              <Dot></Dot>
              <Underline></Underline>
            </UnderlineWrapper>
          </DormHeader>

          <InfoSection>
            <SectionTitle>{dormInfo.SHORT_DESCRIPTION}</SectionTitle>
            <MarginWrapper>{fullDescription}</MarginWrapper>
          </InfoSection>

          <InfoSection>
            <SectionTitle>At a glance</SectionTitle>
          </InfoSection>

          <InfoSection>
            <SectionTitle>Quick review</SectionTitle>
          </InfoSection>

          <InfoSection>
            <SectionTitle>Amenities</SectionTitle>
          </InfoSection>

          <InfoSection>
            <ProCon
              pros={dormInfo.PROS}
              cons={dormInfo.CONS}
            />
          </InfoSection>

          <InfoSection>
          <SectionTitle>Floor Plans</SectionTitle>
                <MarginWrapper>
                  <FloorPlan
                    floorOffset={floorOffset}
                    planArray={floorPlans}
                    planNames={floorNames}
                  />
                </MarginWrapper>
          </InfoSection>

          {(dormInfo.LATITUDE && dormInfo.LONGITUDE) ?
                <InfoSection>
                  <SectionTitle>Location</SectionTitle>
                  <MarginWrapper>
                  <Maps
                        latitudes={[dormInfo.LATITUDE]}
                        longitudes={[dormInfo.LONGITUDE]}
                        popupInfo={[dormInfo.DORM]}
                        popupId={[dormInfo.DORM]}
                        centerLatitude={dormInfo.LATITUDE}
                        centerLongitude={dormInfo.LONGITUDE}
                        width={"100%"}
                        height={"225px"}
                      /></MarginWrapper>
                </InfoSection> : null}

          <InfoSection>
            <SectionTitle>Photo Gallery</SectionTitle>
          </InfoSection>

          {(relatedArticles.length == 0)? null :
            <InfoSection>
              <SectionTitle>Spectrum on Housing</SectionTitle>
              <SpectrumSidebar spectrumSidebarData = {relatedArticles}/>
            </InfoSection>
          }

        </Page>
      );
    } else {
      return (
        <Page>
          <DormHeader>
            <DormName> {dormInfo.DORM} </DormName>
            <UnderlineWrapper>
              <Underline></Underline>
              <Dot></Dot>
              <Underline></Underline>
            </UnderlineWrapper>
          </DormHeader>
          
          <DormImage>
            <Img src={mainImage}></Img>
          </DormImage>
          <Info>
            <ColumnLeft> 
              <InfoSection>
                <SectionTitle>{dormInfo.SHORT_DESCRIPTION}</SectionTitle>
                <MarginWrapper>{fullDescription}</MarginWrapper>
              </InfoSection>
              <InfoSection>
                <SectionTitle>Amenities</SectionTitle>
                <MarginWrapper>
                  <NewAmenities amenities={amenities}/>
                </MarginWrapper>
              </InfoSection>
              <InfoSection>
                <ProCon
                    pros={dormInfo.PROS}
                    cons={dormInfo.CONS}
                />
              </InfoSection>
              <InfoSection>
                <SectionTitle>Floor Plans</SectionTitle>
                <MarginWrapper>
                  <FloorPlan
                    floorOffset={floorOffset}
                    planArray={floorPlans}
                    planNames={floorNames}
                  />
                </MarginWrapper>
              </InfoSection>
              {(dormInfo.LATITUDE && dormInfo.LONGITUDE) ?
                <InfoSection>
                  <SectionTitle>Location</SectionTitle>
                  <MarginWrapper>
                  <Maps
                        latitudes={[dormInfo.LATITUDE]}
                        longitudes={[dormInfo.LONGITUDE]}
                        popupInfo={[dormInfo.DORM]}
                        popupId={[dormInfo.DORM]}
                        centerLatitude={dormInfo.LATITUDE}
                        centerLongitude={dormInfo.LONGITUDE}
                        width={"100%"}
                        height={"300px"}
                      /></MarginWrapper>
                </InfoSection> : null}
              
              {(dorm_photos.length == 0) ? null :
              <InfoSection>
                <SectionTitle>Photo Gallery</SectionTitle>
                <PhotoGallery 
                      updateModal={setIsOpen(false)} 
                      images={dorm_photos} 
                      path={dormInfo.DORM}
                />
              </InfoSection>}
  
              {(relatedArticles.length == 0)? null :
                <InfoSection>
                  <SectionTitle>Spectrum on Housing</SectionTitle>
                  <SpectrumSidebar spectrumSidebarData = {relatedArticles}/>
                </InfoSection>
              }
  
            </ColumnLeft>
            <ColumnRight> 
              <Sticky>
                <StickyTitle>At a glance</StickyTitle>
              </Sticky>
              <Sticky>
                <StickyTitle>Quick review</StickyTitle>
              </Sticky>
            </ColumnRight>
          </Info>
      </Page>
    );
  }
}

export default Dorm;