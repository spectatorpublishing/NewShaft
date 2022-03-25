import styled from "styled-components/macro";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PhotoBanner from "../components/DormPhotoBanner/PhotoBanner";
import NewAmenities from "../components/NewAmenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import FloorPlan from "../components/FloorPlan";
import SpectrumSidebar from "../components/SpectrumSidebar";
import ScrollToTop from "../components/ScrollToTop";
import { theme } from "../util/GlobalStyles";
import DormQuickReview from "../components/DormQuickReview";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.darkGray};
  padding: 2rem;
  margin: 3.25rem 2rem 0rem 2rem;

  @media only screen and (max-width: 767px) {
    padding: 0rem;
		overflow: hidden;
	}
`

const DormHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 1.5rem 0;

  @media only screen and (max-width: 767px) {
		padding: 1.5rem 0 0 0;
    margin: 0;
	}
`

const DormName = styled.h1`
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

const UnderlineWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: -.5rem;

  @media only screen and (max-width: 767px) {
		width: 60%;
	}
`

const Underline = styled.hr`
  width: 45%;
  border: .01rem solid #404040;
  align-self: center;
`

const Dot = styled.span`
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

const DormImage = styled.div`
  display: flex;
  align-self: center;
  width: 90vw;
  height: 80vh;
  
  @media only screen and (max-width: 767px) {
		width: 100vw;
    height: 40vh;
	}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  width: 75%;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
  }
`
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 25%;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`
const StickyContainer = styled.div`
  position: sticky;
  top: ${props => props.buffer};

  @media only screen and (max-width: 768px) {
    display: none;
	}
`
const Sticky = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 2rem;
`

const InfoSection = styled.div`
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
    margin: 1rem 2rem 1rem 2rem;
    background-color: light-blue;
	}
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #707070;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 1rem;
	}
`;

const StickyTitle = styled.h3`
  font-family: Raleway;
  font-weight: 500;
  color: #707070;
  display:flex;
`
const MarginWrapper = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 767px) {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
	}
`;

const Mobile = styled.div`
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

const Desktop = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
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

const Dorm = ({ }) => {
  const { dorm } = useParams();
  const [dormInfo, setDormInfo] = useState({});
  const [amenities, setAmenities] = useState({});
  const [reviews, setReviews] = useState([]);
  const [dorm_photos, setDormPhotos] = useState([]);
  const [relatedArticles, setrelatedArticles] = useState([]);
  const [floorPlans, setFloorPlans] = useState([]);
  const [floorNames, setFloorNames] = useState([]);
  const [floorOffset, setFloorOffset] = useState(null);
  const [relatedDorms, setRelatedDorms] = useState([]);
  const [fullDescription, setFullDescription] = useState("");
  const [roomtype, setRoomType] = useState("");
  const [classMakeupFormat, setClassMakeup] = useState("");
  const [dormStyle, setDormStyle] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [quickReview, setQuickReview] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
    const dormName = dorm.replaceAll("-", " ");
    console.log(dormName)
    fetchDormInfo(dormName);
    //fetchReviews(dormName);
    //fetchRelatedDorms(dormName);
    setAllDormInfo(dormName);
  }, []);

  const fetchDormInfo = async (dormName) => {
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
        setDormInfo(dormInfo);

        setFullDescription(dormInfo.DESCRIPTION.substring(0, dormInfo.DESCRIPTION.length - 1));
        setClassMakeup(dormInfo.CLASS_MAKEUP.split(",").map((el, i) => el.charAt(0).toUpperCase() + el.slice(1)).join(", "));
        setDormStyle((dormInfo.SUITE_ === 1) ? "Suite-Style" : "Corridor-Style");
        setRoomTypeString(dormInfo);
      }).catch(error => {
        console.log(error);
      });
  }

  const setAllDormInfo = (dormName) => {
    fetchAllDormInfo(dormName)
      .then(([amenities, photos, relArticles, floorPlans]) => {
        setAmenities(amenities);
        handlePhotos(photos);
        handleRelArticles(relArticles);
        handleFloorPlans(floorPlans);
      }).catch(error => {
        console.log(error);
      });

    fetchQuickReview(dormName)
      .then(quickReview => {
        console.log(quickReview);
        if (quickReview.dorm) {
          setQuickReview({ cleanliness: quickReview.clean, noise: quickReview.noise, community: quickReview.community, party: quickReview.party, amenities: quickReview.amenities })
        } else {
          setQuickReview(null)
        }
      }).catch(error => {
        console.log(error.message);
      });
  }

  async function fetchAllDormInfo(dormName) {
    const [amenitiesRes, photosRes, relArticlesRes, floorPlansRes] = await Promise.all([
      fetch(`/api/getAmenities/${dormName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      fetch(`/api/getDormPhotos/${dormName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      fetch(`/api/getRelatedArticles/${dormName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      fetch(`/api/getFloorPlans/${dormName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    ]);

    const amenities = await amenitiesRes.json();
    const photos = await photosRes.json();
    console.log(photos);
    const relArticles = await relArticlesRes.json();
    const floorPlans = await floorPlansRes.json();
    return [amenities, photos, relArticles, floorPlans, quickReview];
  }

  async function fetchQuickReview(dormName) {
    const quickReviewRes = await fetch(`/api/getQuickReview/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!quickReviewRes.ok) {
      const message = `An error has occured: ${quickReviewRes.status}`;
      throw new Error(message);
    }

    const quickReview = await quickReviewRes.text();
    const quickReviewJSON = quickReview ? JSON.parse(quickReview) : {}
    return quickReviewJSON;
  }

  const handlePhotos = (dormPhotos) => {
    console.log(dormPhotos);
    setMainImage(dormPhotos[0]["IMAGE_LINK"]);

    var photoarr = [];
    for (var i = 0; i < dormPhotos.length; i++) {
      photoarr.push(dormPhotos[i]["IMAGE_LINK"]);
    }

    setDormPhotos(photoarr);
  }

  const handleRelArticles = (relatedArticles) => {
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
    console.log(relArticles);
    setrelatedArticles(relArticles);
  }

  const handleFloorPlans = (floorPlans) => {
    let floorPlan = floorPlans;
    let floor_state = [];
    let floor_name = [];
    let keys = Object.keys(floorPlan);
    let floor_offset = 1;
    let stop_offset = 0;

    for (var i = 0; i < keys.length; i++) {
      var floorNum = keys[i];
      if (keys[i] == "DORM") {
        continue;
      } else if (floorPlan[floorNum] === "" || floorPlan[floorNum] === null) {
        if (stop_offset === 0) {
          floor_offset++;
          console.log(floor_offset);
        }
      } else {
        stop_offset = 1;
        floor_state[floorNum] = 'https://shaft-dorm-floorplans.s3.amazonaws.com/' + floorPlan[floorNum].replace("Carlton", "Carlton Arms").replace(/ /g, '+');
        floor_name[floorNum] = floorPlan[floorNum].slice(0, -4).replace("_", " ");
      }
    }

    setFloorPlans(floor_state);
    setFloorNames(floor_name);
    setFloorOffset(floor_offset);
    console.log("floor_state: ")
    console.log(floor_state)
    console.log(floor_offset)
  }

  function fetchReviews(dormName) {
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
        setRelatedDorms(relDorms);
      }).catch(error => {
        console.log(error);
      });
  }

  const setRoomTypeString = (dormInfo) => {
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

  const headerButtons = {
    fontSize: 15, textAlign: "center",
    background: theme.columbiaBlue, color: "white",
    borderRadius: 7, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5,
    justifyContent: 'center', alignItems: 'center', minWidth: '160px', border: 'none',
    marginTop: '0.5rem'
  }

  return (
    <ScrollToTop>
      <Page>
        <Mobile>
          {mainImage === "" ? null :
            <DormImage>
              <Img src={mainImage}></Img>
            </DormImage>}
        </Mobile>
        <DormHeader>
          <DormName> {dormInfo.DORM} </DormName>
          <UnderlineWrapper>
            <Underline></Underline>
            <Dot></Dot>
            <Underline></Underline>
          </UnderlineWrapper>
        </DormHeader>
        <Desktop>
          {(dorm_photos.length === 0) ? null : <PhotoBanner bannerImages={dorm_photos} />}
        </Desktop>
        <Info>
          <ColumnLeft>
            <InfoSection>
              <SectionTitle>{dormInfo.SHORT_DESCRIPTION}</SectionTitle>
              <MarginWrapper>{fullDescription}</MarginWrapper>
            </InfoSection>
            <Mobile>
              <InfoSection>
                <AtAGlance address={dormInfo.ADDRESS} classMakeup={classMakeupFormat} roomtype={roomtype} />
              </InfoSection>
              <InfoSection>
                <SectionTitle>Quick review</SectionTitle>
                {quickReview === null ? null :
                  <DormQuickReview QuickReview={quickReview}></DormQuickReview>}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfK1EHqqQrmpYCSviUT_W4aTOuyHiriNn_58N-zAnKoquVS0A/viewform?usp=sf_link" style={headerButtons}>Submit your ratings</a>
              </InfoSection>
            </Mobile>
            <InfoSection>
              <SectionTitle>Amenities</SectionTitle>
              <MarginWrapper>
                <NewAmenities amenities={amenities} />
              </MarginWrapper>
            </InfoSection>
            {dormInfo.DORM === "Carman Hall" ? null :
              <InfoSection>
                <ProCon
                  pros={dormInfo.PROS}
                  cons={dormInfo.CONS}
                />
              </InfoSection>}
            {floorOffset ? <InfoSection>
              <SectionTitle>Floor Plans</SectionTitle>
              <MarginWrapper>
                <FloorPlan
                  floorOffset={floorOffset}
                  planArray={floorPlans}
                  planNames={floorNames}
                />
              </MarginWrapper>
            </InfoSection> : null}
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

            {/* <InfoSection>
              <SectionTitle>Photo Gallery</SectionTitle>
            </InfoSection> */}

            {(relatedArticles.length == 0) ? null :
              <InfoSection>
                <SectionTitle>Spectrum on Housing</SectionTitle>
                <SpectrumSidebar spectrumSidebarData={relatedArticles} />
              </InfoSection>
            }

          </ColumnLeft>
          <ColumnRight>
            <StickyContainer buffer="5rem">
              <Sticky>
                <AtAGlance address={dormInfo.ADDRESS} classMakeup={classMakeupFormat} roomtype={roomtype} />
              </Sticky>
              <Sticky>
                <StickyTitle>Quick Review</StickyTitle>
                {quickReview === null ? null :
                  <DormQuickReview QuickReview={quickReview}></DormQuickReview>}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfK1EHqqQrmpYCSviUT_W4aTOuyHiriNn_58N-zAnKoquVS0A/viewform?usp=sf_link" style={headerButtons}>Submit your ratings</a>
              </Sticky>
            </StickyContainer>
          </ColumnRight>
        </Info>
      </Page>
    </ScrollToTop>
  );
}

export default Dorm;
