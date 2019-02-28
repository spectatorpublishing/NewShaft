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

let sampleAmenities = [
  ["bathroom", "Semi-private"],
  ["laundry", "Laundry - in basement"],
  ["kitchen", "Kitchen - in basement"],
  ["airConditioning", "Air conditioning"],
  ["lounge", "Floor lounge"],
  ["fitness", "Fitness room"],
  ["lounge", "Sky lounge"],
  ["lounge", "Basement lounge"]
];

let sampleAtAGlance = [
  ["location", "545 W street"],
  ["is it nice", "its aight"],
  ["who leaves there", "seenyas only"]
];
  

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
    id: "McBain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "Carman",
    school: "Columbia",
    name: "Carman Hall",
    image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  // {
  //   id: "Sulzberger",
  //   school: "Barnard",
  //   name: "Sulzberger Tower",
  //   image: "https://housing.columbia.edu/files/housing/McBain.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
  //   amenities: "No AC"
  // },
  // {
  //   id: "mcbain",
  //   school: "Columbia",
  //   name: "McBain Hall",
  //   image: "https://housing.columbia.edu/files/housing/McBain.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
  //   amenities: "No AC"
  // },
  // {
  //   id: "mcbain",
  //   school: "Columbia",
  //   name: "McBain Hall",
  //   image: "https://housing.columbia.edu/files/housing/McBain.jpg",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
  //   amenities: "No AC"
  // }
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
  text-shadow: ${props => props.theme.textShadow};
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

let ScrollMenu = styled(ColOne)`ATAGLANCE
  flex-direction: column;
  left: 0;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};

  // 80px = 60px (navbar height) + 20px (padding 
  // which matches the value added in handleScroll())
  ${({ isFixed }) => isFixed && `
    top: 80px;
  `};
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
        GLANCE: sampleAtAGlance,
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
        AMENITIES: sampleAmenities,
        RELATEDDORMS: relatedDorms
      },
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
    console.log(this.props.location.dorm);
    this.fetchDormInfo(this.props.location.dorm)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps){
    console.log("HELLO")
    console.log(newProps.location.dorm)
    this.fetchDormInfo(newProps.location.dorm)
    window.scrollTo(0, 0)
  }

  fetchDormInfo(name) {
    fetch('/api/getDormInfo', {
      method: "POST",
      body: JSON.stringify({ 
        table: "dorm_static_info",
        DORM: name
      }),
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormInfo => {
        console.log(dormInfo);
        dormInfo[0].AMENITIES = sampleAmenities;
        dormInfo[0].PROS = ["Pro 1", "Pro 2", "Pro 3"];
        dormInfo[0].CONS = ["Con 1", "Con 2", "Con 3"];
        this.setState({dormInfo: dormInfo[0]})
      });
  }


  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleScroll(e) {
    // Add 20px to give a little bit of padding on top between the navbar and the menu
    this.isFixed(e.target.scrollingElement.scrollTop + 20);
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
    console.log(this.state.dormInfo);
    
    return (
      <div>
        <PhotoBanner bannerImages={bannerImages} />
        <Header>
          <DormName>{this.props.match.params.dorm}</DormName>
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
                atAGlance={this.state.dormInfo.GLANCE}
              />
            )}
            <ScrollerTarget ref={this.amenitiesRef}>
              <Amenities amenities={this.state.dormInfo.AMENITIES}/>
            </ScrollerTarget>

            <ScrollerTarget ref={this.locationRef}>
              <Maps
                latitudes={[40.7128, 40.7129, 40.7128]}
                longitudes={[-74.006, -74.007, -74.008]}
                popupInfo={["Carman", "McBain", "John Jay"]}
                popupId={["Carman", "McBain", "JohnJay"]}
                width={"100%"}
                height={"300px"}
              />
            </ScrollerTarget>
            <ScrollerTarget ref={this.proconRef}>
              <ProCon
                pros={this.state.dormInfo.PROS}
                cons={this.state.dormInfo.CONS}
              />
            </ScrollerTarget>
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
            <ScrollerTarget ref={this.reviewsRef}>
              <ReviewsBox
                stars={stars}
                recommend={recommend}
                ranking={ranking}
                reviews={reviews}>
              </ReviewsBox>
            </ScrollerTarget>
            <ScrollerTarget ref={this.suggestionsRef}>
              <RelatedDorms
                name={this.props.match.params.dorm}
                relatedDorms={relatedDorms}
              />
            </ScrollerTarget>
          </ColTwo>

          {!isMobile && (
            <ColThree>
              <AtAGlance
                 atAGlance={this.state.dormInfo.GLANCE}
              />
            </ColThree>
          )}
        </Body>
      </div>
    );
  }
}
