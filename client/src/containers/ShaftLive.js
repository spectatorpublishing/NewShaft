import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import FloorButton from "../components/FloorButton.js";
import FloorPlanSVG from "../components/FloorPlanSVG";
import DormList from "../components/LotteryPredictor/DormList.js";
import { FILTER_NAME_TO_KEY } from "../util/DormFilter.js";
import Filters from "../components/ExploreFilters/Filters.js";
import _, { initial } from "lodash";
import { isLotteryNumberValid } from "../util/LotteryPredictor.js";
import alerts from "../components/LotteryPredictor/alerts.json";

const ShaftLiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0;
  }
`;

const FiltersContainer = styled.div`
  @media (max-width: 991px) {
    padding-left: 2rem;
    padding-bottom: 1rem;
    padding-top: 0rem;
  }
`;

const ColOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: "pink";
  @media (max-width: 991px) {
    display: flex;
    width: 50vw;
  }
`;

const ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  padding-top: 1rem;
  width: ${({ mobile }) => (mobile ? `100%` : `50%`)};
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    width: 60vw;
  }
  & > h1 {
    margin-top: 2.5rem;
  }
`;

const ColorBox = styled.div`
  height: 0.6rem;
  width: 1.8rem;
  display: inline-block;
  margin-right: 0.3rem;
  border-radius: 10px;
  background: ${(props) => props.color};
  align-self: center;
  color: #707070;

  @media only screen and (max-width: 992px) {
    width: 30%;
    height: 0.7rem;
    padding: 0.2rem 0;
    margin-right: 0.8rem;
    border-radius: 4px;
  }
`;

const FloorPlanLegend = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 992px) {
    text-align: center;
    flex-wrap: wrap;
  }
`;

const LegendItem = styled.div`
  display: flex;
  padding-right: 2rem;
  @media only screen and (max-width: 992px) {
    width: 50%;
    padding: 0.2rem 0;
  }
`;

const Converter = styled.div`
  margin: 5rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c4c4c4;
  @media (max-width: 991px) {
    margin: 5rem 1.5rem 2rem 1.5rem;
  }
`;

const Error = styled.div`
  color: #9a4a4a;
  margin: 0rem 3rem;
  @media (max-width: 991px) {
    margin: 0.5rem 1rem 1rem 2rem;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.form`
  color: #707070;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0.5rem 0rem;
  }

  label {
    margin: auto 0rem;

    @media (max-width: 991px) {
      margin: auto auto auto 0rem;
    }
  }
`;
const StyleInput = styled.input`
  background: none;
  border: 1px solid #d0d0d0;
  border-radius: 5%;
  width: 30%;
  color: ${(props) => props.theme.darkGray};
  font-size: 1rem;
  margin-left: 1rem;
  @media (max-width: 991px) {
    width: 40%;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const TextBox = styled.div`
  font-size: 1rem;
  color: #707070;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const DormName = styled.div`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  color: #707070;
  padding: 0rem 0 1rem 0;
  @media (max-width: 991px) {
    margin: 0rem auto;
  }
`;

const FloorPlanWrapper = styled.div`
  width: 70%;

  img {
    width: 100%;
  }
  @media (max-width: 991px) {
    margin: 1rem auto;
  }
`;

const FloorPlansRow = styled.div`
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const AboutLeft = styled.div`
  margin: auto 0rem;
`;

const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem 1rem auto;

  @media (max-width: 991px) {
    margin: 1rem 1rem 2rem auto;
  }
`;

const DisclaimerTextBox = styled.div`
  width: 80%;
  font-size: 0.75rem;
  color: #707070;
  margin: 0rem 0rem 0rem auto;

  @media (max-width: 991px) {
    margin: 0.2rem 1.2rem;
    width: auto;
  }

  &.disclaimer {
    color: #9a4a4a;
    padding-bottom: 0.3rem;

    @media (max-width: 991px) {
      border-top: 1px solid #c4c4c4;
      padding-top: 1rem;
    }
  }
`;

const Mobile = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

const Desktop = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

const AlertMessage = styled.div`
  padding: 0.75rem;
  max-width: 25rem;
  background-color: #ddeaff;
  border-radius: 1rem;
  color: black;
  margin: 0 0 0.5rem auto;

  @media (max-width: 991px) {
    margin: 1rem;
  }

`;
const AlertCircle = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  background-color: #7791b7;
  color: white;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  border-radius: 20rem;
  text-align: center;
  transform: translate(-22px, -18px);

  @media (max-width: 991px) {
    display: none;
  }
`;

const initialPayload = {
  COLUMBIA: 0,
  BARNARD: 0,
  SINGLE_: 0,
  DOUBLE_: 0,
  TRIPLE_: 0,
  SUITE_: 0,
  NOTSUITE_: 0,
  TWO_SUITE: 0,
  THREE_SUITE: 0,
  FOUR_SUITE: 0,
  FIVE_SUITE: 0,
  SIX_SUITE: 0,
  SEVEN_SUITE: 0,
  EIGHT_SUITE: 0,
  NINE_SUITE: 0,
  TEN_SUITE: 0,
  FRESHMAN: 0,
  SOPHOMORE: 0,
  JUNIOR: 0,
  SENIOR: 0,
  DORM: "",
};

const filterElements = {
  "Typical Residents": ["Sophomore", "Junior", "Senior"],
  "Room Type": ["Corridor Style", "Suite Style", "Single", "Double"],
};

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

const firstFloor = {
  "47 Claremont": "1",
  "Broadway Hall": "3",
  "Carlton Arms": "1A",
  "East Campus": "6",
  "Furnald Hall": "1",
  "Harmony Hall": "1",
  "Hartley Hall": "2",
  "Hogan Hall": "2",
  "McBain Hall": "1",
  "600 W 113th": "2",
  "River Hall": "1",
  "Ruggles Hall": "1",
  "Schapiro Hall": "2",
  "Wallach Hall": "8",
  "Watt Hall": "1",
  "Wien Hall": "2",
  "Woodbridge Hall": "1",
};

const ShaftLive = (props) => {
  const [dorm, setDorm] = useState("47 Claremont");
  const [dormChange, setDormChange] = useState(false);
  const [floor, setFloor] = useState("1");
  const [floorNums, setFloorNums] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const [init, setInit] = useState(true);
  const [lotteryNum, setLotteryNum] = useState(0);
  const [errorMsg, setErrorMessage] = useState("");
  const [orderedFloorNumsArr, setOrderedFloorNumsArr] = useState([]);

  const [payload, setPayload] = useState(_.clone(initialPayload));
  const [dorms, setDorms] = useState(defaultDorms);

  useEffect(() => {
    getAllDormInfo(dorm, floor);
    window.scrollTo(0, 0);
    document.title = "The Shaft";
  }, []);

  useEffect(() => {
    if (floorNums) {
      setOrderedFloorNumsArr(getOrderedFloorsArr(floorNums));
    }
  }, floorNums);

  const updatePayload = (newValue, name, filters) => {
    let p = payload;
    if (filters != undefined) {
      for (var prop in filters) {
        p[prop] = filters[prop];
      }
    } else {
      p[FILTER_NAME_TO_KEY[name]] = newValue;
    }
    filterDorms();
    setPayload(p);
  };

  const resetPayload = () => {
    setPayload(_.clone(initialPayload));
  };

  const filterDorms = () => {
    fetch("/api/getFilteredDorms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        let updatedDorms = [];
        for (let i = 0; i < response.length; i++) {
          if (defaultDorms.indexOf(response[i].DORM) >= 0) {
            updatedDorms.push(response[i].DORM);
          }
        }
        setDorms(updatedDorms);
      });
  };

  async function fetchAllDormInfo(dorm, floor) {
    const [floorNumsRes, floorDataRes] = await Promise.all([
      fetch(`/api/getUniqueFloorNumbers/${dorm}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      fetch(`/api/getLotteryNum/${dorm}/${floor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    ]);

    const floorNums = await floorNumsRes.json();
    const floorData = await floorDataRes.json();
    return [floorNums, floorData];
  }

  async function fetchFloorData(dorm, floor) {
    const floorDataRes = await fetch(`/api/getLotteryNum/${dorm}/${floor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const floorData = await floorDataRes.json();
    return floorData;
  }

  const getAllDormInfo = (dorm, floor) => {
    fetchAllDormInfo(dorm, floor)
      .then(([floorNums, floorData]) => {
        setFloorNums(floorNums);
        setFloorData(floorData);
        setDorm(dorm);
        setFloor(floor);
        setDormChange(!dormChange);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFloorData = (dorm, floor) => {
    fetchFloorData(dorm, floor)
      .then((floorData) => {
        setFloorData(floorData);
        setFloor(floor);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLotteryNumber = (num) => {
    const number = parseInt(num.toString());

    if (num.length === 0) {
      setLotteryNum(0);
      clearErrorMessage();
    } else if (!isLotteryNumberValid(number)) {
      setLotteryNum(0);
      setErrorMessage("Enter valid lottery number");
    } else {
      clearErrorMessage();
    }

    setLotteryNum(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFloorChange = (floor) => {
    getFloorData(dorm, floor);
  };

  const handleDormChange = (dorm) => {
    setDorm(dorm);
    setInit(false);
    getAllDormInfo(dorm, firstFloor[dorm]);
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const getOrderedFloorsArr = (floorNums) => {
    let floorNumsArr = []
    floorNums.map((floor) => {
        floorNumsArr.push(floor["floor"]);
    })

    floorNumsArr = floorNumsArr.sort(function(a, b) {
        return a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
    });
    return floorNumsArr;
}

  const floorPlans = (
    <>
      {dorm in alerts && (
        <AlertMessage>
          <AlertCircle>!</AlertCircle>
          {alerts[dorm]}
        </AlertMessage>
      )}
      <FloorPlansRow>
        <FloorButton dorm={dorm} curFloor={floor} floorNums={orderedFloorNumsArr} handleChange={handleFloorChange} />
        <FloorPlanWrapper>
          <FloorPlanSVG
            lotteryNum={lotteryNum}
            dorm={dorm}
            floor={floor}
            data={floorData}
            cutoffs={[]}
            init={init}
            dormChange={dormChange}
          ></FloorPlanSVG>
        </FloorPlanWrapper>
      </FloorPlansRow>
    </>
  );

  return (
    <div>
      <Mobile>
        <Converter>
          <InputsWrapper>
            <Input id='form' onSubmit={handleSubmit}>
              <label for='userNum'>Lottery Number: </label>
              <StyleInput
                type='number'
                id='userNum'
                min='1'
                max='5000'
                onChange={(e) => handleLotteryNumber(e.target.value)}
              />
            </Input>
            {/* <Input id="form">
                <label for="groupSize">Group Size:  </label>
                <StyleInput type="number" id="groupSize" min="1" max="10" onChange={() => this.convertNumber()} />
              </Input> */}
          </InputsWrapper>
          <AboutWrapper>
            <TextBox>
              {" "}
              Green rooms are ones that you are likely to get based off data
              that Spectator has collected from housing selection from previous
              years.
            </TextBox>
            {/* <TextBox>Learn how our lottery predictor works to make the best use of its results.</TextBox> */}
            {floorplanLegend}
          </AboutWrapper>
        </Converter>
        {errorMsg === "" ? null : <Error>{"* " + errorMsg}</Error>}
        <ShaftLiveContainer>
          <FiltersContainer>
            <Filters
              handleChange={updatePayload}
              payload={payload}
              reset={resetPayload}
              filterElements={filterElements}
            ></Filters>
          </FiltersContainer>
          <DormList
            lotteryNum={lotteryNum ? lotteryNum : 0}
            setSelectedDorm={handleDormChange}
            selectedDorm={dorm}
            floorPlans={floorPlans}
            updatedDorms={dorms}
          />
          <Disclaimer />
        </ShaftLiveContainer>
      </Mobile>
      <Desktop>
        <Converter>
          <AboutWrapper>
            <AboutLeft>
              <InputsWrapper>
                <Input id='form' onSubmit={handleSubmit}>
                  <label for='userNum'>Lottery Number</label>
                  <StyleInput
                    type='number'
                    id='userNum'
                    onChange={(e) => handleLotteryNumber(e.target.value)}
                  />
                </Input>
                {/* <Input id="form">
                <label for="groupSize">Group Size</label>
                <StyleInput type="number" id="groupSize" onChange={() => this.convertNumber()} />
              </Input> */}
              </InputsWrapper>
              <TextBox>
                Check out our color-coded floor plans to see which rooms you are
                likely to get!
                {floorplanLegend}
              </TextBox>
            </AboutLeft>
            <Disclaimer />
          </AboutWrapper>
        </Converter>
        {errorMsg === "" ? null : <Error>{"* " + errorMsg}</Error>}
        <ShaftLiveContainer>
          <ColOne>
            <Filters
              handleChange={updatePayload}
              payload={payload}
              reset={resetPayload}
              filterElements={filterElements}
            ></Filters>
            <DormList
              lotteryNum={lotteryNum ? lotteryNum : 0}
              setSelectedDorm={handleDormChange}
              selectedDorm={dorm}
              floorPlans={floorPlans}
              updatedDorms={dorms}
            />
          </ColOne>

          <ColTwo>
            <DormName>{dorm} </DormName>
            {floorPlans}
          </ColTwo>
        </ShaftLiveContainer>
      </Desktop>
    </div>
  );
};

export default ShaftLive;

const Disclaimer = () => {
  return (
    <DisclaimerWrapper>
      <DisclaimerTextBox className='disclaimer'>Disclaimer:</DisclaimerTextBox>
      <DisclaimerTextBox>
        Historical Room Selection data (ranging from 2020-2022) is provided by
        Columbia Housing for reference only. The selection process shifts year
        to year and can change based on a number of variables that will impact
        how students pick rooms, including changes in building allocation,
        personal preferences, class size, external factors and more. This data
        should not be used as a predictive tool nor does it provide any
        guarantee for selection options. Learn how our lottery predictor works
        to make the best use of its results.
      </DisclaimerTextBox>
    </DisclaimerWrapper>
  );
};

const floorplanLegend = (
  <FloorPlanLegend>
    <LegendItem>
      <ColorBox color={(props) => props.theme.green} />
      <h6>Likely</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.yellow} />
      <h6>Similar</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.red} />
      <h6>Unlikely</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.lightGray} />
      <h6>Unavailable</h6>
    </LegendItem>
  </FloorPlanLegend>
);
