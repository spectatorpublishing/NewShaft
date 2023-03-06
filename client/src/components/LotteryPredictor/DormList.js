import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../util/GlobalStyles";
import { update } from "lodash";
import alerts from "./alerts.json";

const List = styled.div`
  width: 80%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 1rem;
  overflow: scroll;
  padding-right: 1rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 992px) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const DormButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  padding: 0.6rem;
  margin: 0.1rem 0;
  background-color: ${(props) => props.color};
`;

const DormName = styled.div`
  width: 30%;
  text-align: left;
  /* padding-left: 1rem; */
  font-family: Georgia;
  font-weight: bold;
  color: ${(props) => props.textColor};

  @media only screen and (max-width: 992px) {
    width: 40%;
    margin-right: 1rem;
  }
`;

const BarWrapper = styled.div`
  height: 0.6rem;
  width: 60%;
  display: flex;
  flex-direction: row;
  border-radius: 0px;
  align-self: center;
  @media only screen and (max-width: 992px) {
    width: 50%;
  }
`;

const Mobile = styled.div`
  @media only screen and (min-width: 991px) {
    display: none;
  }
`;

const ColorBar = styled.div`
  // placeholder for testing
  width: ${(props) => props.width}%;

  &.likely {
    background-color: ${(props) => props.theme.green};
  }
  &.possible {
    background-color: ${(props) => props.theme.yellow};
  }
  &.unlikely {
    background-color: ${(props) => props.theme.red};
  }
  &.unavail {
    background-color: ${(props) => props.theme.lightGray};
  }
`;

const ArrowWrapper = styled.div`
  padding: 0 1rem 0 2rem;
  color: #707070;
  @media only screen and (max-width: 992px) {
    padding: 0 1rem;
  }
`;

const Alert = styled.div`
  min-height: 1.6rem;
  min-width: 1.6rem;
  max-height: 1.6rem;
  max-width: 1.6rem;
  background-color: #879bb8;
  margin-right: 0.5rem;
  border-radius: 50rem;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const defaultDorms = [
  "47 Claremont",
  "Broadway Hall",
  "East Campus",
  "Furnald Hall",
  "Harmony Hall",
  "Hogan Hall",
  "McBain Hall",
  "600 W 113th",
  "River Hall",
  "Ruggles Hall",
  "Schapiro Hall",
  "Watt Hall",
  "Wien Hall",
  "Woodbridge Hall",
];

// Dorms in this List don't have floorplan and svgs
// in our AWS S3 bucket, so will not be shown on the
// front-end until the images are added
const blacklist = [
  "548 West 113",
  "627 West 115",
  // "Carlton Arms",
  // "Hartley Hall",
  "Plimpton Hall",
  "Wallach Hall"
]

const DormButton = (props) => {
  const [isSelected, setSelected] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(props.ratio[0] + props.ratio[1] + props.ratio[2] + props.ratio[3]);
  }, [props.ratio]);

  useEffect(() => {
    if (props.dormName === props.selectedDorm) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [props.selectedDorm]);

  const handleClick = () => {
    setSelected(true);
    props.setSelectedDorm(props.dormName);
  };

  const setWidth = (ratio) => {
    var width = (ratio / total) * 100;
    return width.toString().substring(0, 4);
  };

  return (
    <DormButtonWrapper
      onClick={() => handleClick()}
      color={isSelected ? "rgba(196, 196, 196, 0.2)" : "white"}
    >
      {props.hasAlert && <Alert>!</Alert>}
      <DormName textColor={isSelected ? theme.columbiaBlue : "black"}>
        {props.dormName}
      </DormName>
      <BarWrapper>
        <ColorBar
          width={props.ratio ? setWidth(props.ratio[0]) : "25"}
          className='likely'
        ></ColorBar>
        <ColorBar
          width={props.ratio ? setWidth(props.ratio[1]) : "25"}
          className='possible'
        ></ColorBar>
        <ColorBar
          width={props.ratio ? setWidth(props.ratio[2]) : "25"}
          className='unlikely'
        ></ColorBar>
        <ColorBar
          width={props.ratio ? setWidth(props.ratio[3]) : "25"}
          className='unavail'
        ></ColorBar>
      </BarWrapper>
      <ArrowWrapper>
        <FontAwesomeIcon icon={faAngleRight} />
      </ArrowWrapper>
    </DormButtonWrapper>
  );
};

const DormList = ({
  lotteryNum,
  setSelectedDorm,
  selectedDorm,
  floorPlans,
  updatedDorms,
}) => {
  // controls setting of data on initial load
  const [initialLoad, setInitial] = useState(1);
  const [dorms, setDorms] = useState(
    updatedDorms.map((dorm) => ({
      DORM: dorm,
      RATIO: [25, 25, 25, "0"].map((x) => parseInt(x)),
    }))
  );

  useEffect(() => {
    // lotteryNum assumtpions
    // 1. guaranteed to be integer by ShaftLive.js
    // 2. value 0 -> user hasn't input lottery number
    // 3. value 1 - 5000 inclusive: lottery number from user input
    if (!initialLoad) fetchDormInfo(lotteryNum);
    else setInitial(0);
  }, [lotteryNum, updatedDorms]);

  const fetchDormInfo = (lotteryNum) => {
    if (lotteryNum.toString() === "0") {
      // if empty set to default
      setDorms(
        updatedDorms.map((dorm) => ({
          // Note: We are currently using the Unavailable feature
          DORM: dorm,
          RATIO: [25, 25, 25, 0],
        }))
      );
    } else {
      fetch(`/api/getLotteryInfo/${lotteryNum}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((lotteryInfo) =>
          setDorms(
            lotteryInfo
              // Note: Not show dorms in blacklist until we have added
              // the relevant floorplan and svgs to AWS S3 bucket
              .filter(
                ({ DORM }) =>
                  !blacklist.includes(DORM) && updatedDorms.includes(DORM)
              )
              .map(({ DORM, LIKELY, SIM, UNLIKELY }) => ({
                DORM,
                RATIO: [UNLIKELY, SIM, LIKELY, "0"].map((x) => parseInt(x)),
              }))
          )
        );
    }
  };

  return (
    <List>
      {dorms.map((dorm, index) => {
        return (
          <div>
            <DormButton
              key={index}
              hasAlert={dorm.DORM in alerts}
              dormName={dorm.DORM}
              ratio={dorm.RATIO}
              setSelectedDorm={setSelectedDorm}
              selectedDorm={selectedDorm}
            ></DormButton>
            {selectedDorm === dorm.DORM ? <Mobile>{floorPlans}</Mobile> : null}
          </div>
        );
      })}
    </List>
  );
};

export default DormList;
