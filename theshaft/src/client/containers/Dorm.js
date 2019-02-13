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
import Review from "../components/Review";

var fakedata = {
  "110": {
    dorm: "110",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    college: "barnard",
    thumbnail_image: "N/A",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: true,
    triple: true,
    make_up: ["first-years", "sophomores", "juniors", "seniors"],
    pros: ["pro1", "pro2", "pro3"],
    cons: ""
  },

  "Carman": {
    dorm: "Carman",
    address: "619 W 113th St",
    description: "Comedy House",
    college: "columbia",
    thumbnail_image: "N/A",
    suite: ["5"],
    walkthrough: false,
    single: true,
    double: true,
    triple: false,
    make_up: ["sophomores", "juniors", "seniors"],
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"]
  },

  "McBain": {
    dorm: "McBain",
    address: "McBain Fake Address",
    description: "On Campus",
    college: "columbia",
    thumbnail_image: "N/A",
    suite: ["4", "3"],
    walkthrough: false,
    single: true,
    double: true,
    triple: true,
    make_up: ["sophomores"],
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"]
  }
};

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
  {
    id: "Sulzberger",
    school: "Barnard",
    name: "Sulzberger Tower",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  }
];

let Header = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  margin: 0 15%;
  pointer-events: none;
`;
let DormName = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-weight: bolder;
  pointer-events: initial;
`;

let Blurb = styled.div`
  background-color: #44a7ff;
  color: white;
  font-size: 1rem;
  font-weight: 300;
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
  width: 15%;
`;

let ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${mobile => (mobile ? `100%` : `50%`)};
`;

let ColThree = styled.div`
  display: flex;
  width: 35%;
  margin-left: 5vw;
`;

const bannerImages = [
  "https://blog.ocm.com/wp-content/uploads/2017/08/Kiss-Pleat_Gray_Main_Alt_Exp.jpg",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
];

export default class Dorm extends React.PureComponent {
  constructor(props) {
    super(props);
    let screen_width = window.innerWidth;
    console.log(screen_width);
    console.log()
    let info = fakedata[this.props.match.params.dorm];
    this.state = {
      dormInfo: {
        address: info["address"],
        description: info["description"],
        college: info["college"],
        thumbnail_image: info["thumbnail_image"],
        suite: info["suite"],
        walkthrough: info["walkthrough"],
        single: info["single"],
        double: info["double"],
        triple: info["triple"],
        make_up: info["make_up"],
        pros: info["pros"],
        cons: info["cons"],
        amenities: sampleAmenities,
        relatedDorms: relatedDorms
      },
      width: screen_width
    };

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    // fetch('/api/getDormInfo?table=theshaft.dorm_static_info?DORM=' + this.props.match.params.dorm)
    //   .then(res => {res.json(); console.log(res);})
    //   .then(dormInfo => this.setState({dormInfo: dormInfo}));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  //   componentWillReceiveProps(nextProps){
  //     //call your api and update state with new props
  //  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const isMobile = this.state.width <= 700;
    let roomtype = "";
    if (this.state.dormInfo.suite.length != 0) {
      roomtype += "Suite-style";
      if (this.state.dormInfo.single && this.state.dormInfo.double)
        roomtype += " singles and doubles";
      else if (this.state.dormInfo.single) roomtype += " singles";
      else if (this.state.dormInfo.double) roomtype += " doubles";
    } else if (this.state.dormInfo.walkthrough)
      roomtype += "Doubles and walkthrough doubles";
    else {
      if (this.state.dormInfo.single && this.state.dormInfo.double)
        roomtype += "Singles and doubles";
      else if (this.state.dormInfo.single) roomtype += "Singles";
      else if (this.state.dormInfo.double) roomtype += "Doubles";
    }
    if (this.state.dormInfo.triple) roomtype += " and triples";
    return (
      <div>
        <PhotoBanner bannerImages={bannerImages} />
        <Header>
          <DormName>{this.props.match.params.dorm}</DormName>
        </Header>
        <Blurb>{this.state.dormInfo.description}</Blurb>

        <Body>
          {!isMobile && <ColOne />}

          <ColTwo mobile={isMobile}>
            {isMobile && (
              <AtAGlance
                location={this.state.dormInfo.address}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.make_up}
                numfloors="13"
              />
            )}
            <Amenities amenities={this.state.dormInfo.amenities} />
            <Maps
              latitudes={[40.7128, 40.7129, 40.7128]}
              longitudes={[-74.006, -74.007, -74.008]}
              popupInfo={["Carman", "McBain", "John Jay"]}
              popupId={["Carman", "McBain", "JohnJay"]}
            />
            <ProCon
              pros={this.state.dormInfo.pros}
              cons={this.state.dormInfo.cons}
            />
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
            <Review />
            <RelatedDorms
              name={this.props.match.params.dorm}
              relatedDorms={relatedDorms}
            />
          </ColTwo>

          {!isMobile && (
            <ColThree>
              <AtAGlance
                location={this.state.dormInfo.address}
                roomtype={roomtype}
                classmakeup={this.state.dormInfo.make_up}
                numfloors="13"
              />
            </ColThree>
          )}
        </Body>
      </div>
    );
  }
}
