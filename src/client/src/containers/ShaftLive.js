import React, { useEffect, useState } from 'react';
import styled from "styled-components/macro";
import FloorButton from "../components/FloorButton.js";
import FloorPlanSVG from "../components/FloorPlanSVG"
import DormList from '../components/LotteryPredictor/DormList.js';

const ShaftLiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    overflow: hidden;
    flex-direction: row;
    @media(max-width: 991px){
      flex-direction: column;
      padding: 0;
    }
`;

const ColOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: "pink";
  @media(max-width: 991px){
      display:flex;
      width:50vw;
  }
`;

const ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    padding-top: 1rem;
    width: ${({ mobile }) => (mobile ? `100%` : `50%`)};
    @media(max-width: 991px){
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        width:60vw;
    }
    &>h1 {
      margin-top: 2.5rem;
    }
`;

const ColorBox = styled.div`
  height: .6rem;
  width: 1.8rem;
  display: inline-block;
  margin-right: 0.3rem;
  border-radius: 10px;
  background: ${(props) => props.color};
  align-self: center;
  color: #707070;

  @media only screen and (max-width: 992px){
    width: 30%;
    height: .7rem;
    padding: .2rem 0;
    margin-right: .8rem;
    border-radius: 4px;
  }
`;

const FloorPlanLegend = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  
  @media only screen and (max-width: 992px){
    text-align: center;
    flex-wrap: wrap;
  }
`;

const LegendItem = styled.div`
  display: flex;
  padding-right: 2rem;
  @media only screen and (max-width: 992px){
    width: 50%;
    padding: .2rem 0;
  }
`;

const Converter = styled.div`
  margin: 5rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #C4C4C4;
  @media(max-width: 991px){
    margin: 5rem 1.5rem 2rem 1.5rem;
  }
`;

const Error = styled.div`
  color: #9A4A4A;
  margin: 0rem 3rem;
  @media(max-width: 991px){
    margin: 0.5rem 1rem 1rem 2rem;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem;

  @media(max-width: 768px){
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
  @media(max-width: 991px){
    width: 100%;
    margin: 0.5rem 0rem;
  }

  label {
    margin: auto 0rem;

    @media(max-width: 991px){
      margin: auto auto auto 0rem;
    }
  }
`;
const StyleInput = styled.input`
  background: none;
  border: 1px solid #D0D0D0;
  border-radius: 5%;
  width: 30%;
  color: ${(props) => props.theme.darkGray};
  font-size: 1rem;
  margin-left: 1rem;
  @media(max-width: 991px){
    width: 40%;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 768px){
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const TextBox = styled.div`
  font-size: 1rem;
  color: #707070;
  @media(max-width: 768px){
    width: 100%;
    padding: .5rem 0;
  }
`;

const DormName = styled.div`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  color: #707070;
  padding: 0rem 0 1rem 0;
  @media(max-width: 991px){
    margin: 0rem auto;
  }
`;

const FloorPlanWrapper = styled.div`
  width: 70%;
  @media(max-width: 991px){
    margin: 1rem auto;
  }
`;

const FloorPlansRow = styled.div`
  display: flex;

  @media(max-width: 991px){
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

  @media(max-width: 991px){
    margin: 1rem 1rem 2rem auto;
  }
`;

const DisclaimerTextBox = styled.div`
  width: 80%;
  font-size: 0.75rem;
  color: #707070;
  margin: 0rem 0rem 0rem auto;

  @media(max-width: 991px){
    margin: 0.2rem 1.2rem;
    width: auto;
  }

  &.disclaimer {
    color: #9A4A4A;
    padding-bottom: 0.3rem;
    
    @media(max-width: 991px){
      border-top: 1px solid #C4C4C4;
      padding-top: 1rem;
    }
  }
`;

const Mobile = styled.div`  
  @media(min-width: 991px){
    display: none;
  }
`;

const Desktop = styled.div`
  @media(max-width: 991px){
    display: none;
  }
`;

const ShaftLive = () => {
  const [dorm, setDorm] = useState("47 Claremont");
  const [dormRefresh, setDormRefresh] = useState(false);
  const [floor, setFloor] = useState("1");
  const [floorNums, setFloorNums] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const [init, setInit] = useState(true);
  const [lotteryNum, setLotteryNum] = useState(0);
  const [convertedNumLow, setConvertedNumLow] = useState(null);
  const [convertedNumHigh, setConvertedNumHigh] = useState(null);
  const [priority, setPriority] = useState(null);
  const [full, setFull] = useState(" ");
  const [errorMsg, setErrorMessage] = useState("");

  useEffect(() => {
    fetchFloorNums(dorm);
    setInterval(() => fetchFloorData(dorm, floor), 15000);
  }, []);

  const fetchFloorNums = (dormName) => {
    fetch(`/api/getUniqueFloorNumbers/${dormName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(floorNums => {
        setFloorNums(floorNums);
      });
  }

  const fetchFloorData = (dorm, floor) => {
    fetch(`/api/getLotteryNum/${dorm}/${floor}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(response => {
        setDorm(dorm);
        setDormRefresh(!dormRefresh);
        setFloor(floor);
        setFloorData(response);
      });
    console.log(dorm, floor, floorData)
  }

  const convertNumber = (num) => {
    const number = parseInt(num.toString())
    /* var groupSize = parseInt(document.getElementById("groupSize").value.toString()); */

    if (num.length === 0) {
      setLotteryNum(0);
      clearErrorMessage();
    } else if (number < 1 || number > 5000) {
      setLotteryNum(0);
      setErrorMessage("Enter valid lottery number")
    } else {
      var thousands = (num - (num % 1000)) / 1000
      //console.log("thousands: ", thousands);
      if (thousands == 0) {
        var priority = 30;
      }
      else if (thousands == 1) {
        var priority = 25;
      }
      else if (thousands == 2) {
        var priority = 20;
      }
      else if (thousands == 3) {
        var priority = 15;
      }
      else {
        var priority = 10;
      }
      //console.log("priority: ", priority)
      var converted = (num - (thousands * 1000)) * (3000 / 1000)
      //console.log("converted num: ", converted)
      var rounded = converted - (converted % 10)
      if (rounded < 40) {
        var low = 0;
      }
      else {
        var low = rounded - 50
      }
      if (rounded > 2950) {
        var high = 3000;
      }
      else {
        var high = rounded + 50
      }
      //console.log("range: ", low, " - ", high)

      setLotteryNum(num);
      setConvertedNumLow(low);
      setConvertedNumHigh(high);
      setPriority(priority);
      setFull(priority + " | " + low + " - " + high);
      setDorm("47 Claremont");

      /* if ( groupSize < 1 || groupSize > 10) {
        setErrorMessage("Enter valid group size")
      } else {
        clearErrorMessage();
      }  */
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFloorChange = (floor) => {
    fetchFloorData(dorm, floor);
  }

  const handleDormChange = (dorm) => {

    const firstFloor = {
      "47 Claremont": "1",
      "Broadway Hall": "3",
      "Carlton Arms": "1A",
      "East Campus": "6",
      "Furnald Hall": "1",
      "Harmony Hall": "1",
      "Hogan Hall": "2",
      "McBain Hall": "1",
      "600 W 113th": "2",
      "River Hall": "1",
      "Ruggles Hall": "1",
      "Schapiro Hall": "2",
      "Watt Hall": "1",
      "Wien Hall": "2",
      "Woodbridge Hall": "1"
    }

    setDorm(dorm);
    setFloor(firstFloor[dorm]);
    setInit(false);

    fetchFloorNums(dorm);
    fetchFloorData(dorm, firstFloor[dorm]);
  }

  const clearErrorMessage = () => {
    setErrorMessage("");
  }

  return (
    <div>
      <Mobile>
        <Converter>
          <InputsWrapper>
            <Input id="form">
              <label for="userNum">Lottery Number:  </label>
              <StyleInput type="number" id="userNum" min="1" max="5000" onChange={(e) => convertNumber(e.target.value)} />
            </Input>
            {/* <Input id="form">
                <label for="groupSize">Group Size:  </label>
                <StyleInput type="number" id="groupSize" min="1" max="10" onChange={() => this.convertNumber()} />
              </Input> */}
          </InputsWrapper>
          <AboutWrapper>
            <TextBox> Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years.</TextBox>
            {/* <TextBox>Learn how our lottery predictor works to make the best use of its results.</TextBox> */}
            {floorplanLegend}
          </AboutWrapper>
        </Converter>
        {(errorMsg === "") ? null : <Error>{"* " + errorMsg}</Error>}
        <ShaftLiveContainer>
          <DormList lotteryNum={lotteryNum ? lotteryNum : 0} setSelectedDorm={handleDormChange} selectedDorm={dorm} />
          <DormName>{dorm}</DormName>
          <FloorPlansRow>
            <FloorButton floorNums={floorNums} handleChange={handleFloorChange} />
            <FloorPlanWrapper>
              <FloorPlanSVG
                priority={priority}
                low={convertedNumLow}
                high={convertedNumHigh}
                dorm={dorm}
                floor={floor}
                data={floorData}
                cutoffs={[]}
                init={init}
                dormRefresh={dormRefresh} >
              </FloorPlanSVG>
            </FloorPlanWrapper>
          </FloorPlansRow>
          <Disclaimer />
        </ShaftLiveContainer>
      </Mobile>
      <Desktop>
        <Converter>
          <AboutWrapper>
            <AboutLeft>
              <InputsWrapper>
                <Input id="form">
                  <label for="userNum">Lottery Number</label>
                  <StyleInput type="number" id="userNum" onChange={(e) => convertNumber(e.target.value)} />
                </Input>
                {/* <Input id="form">
                <label for="groupSize">Group Size</label>
                <StyleInput type="number" id="groupSize" onChange={() => this.convertNumber()} />
              </Input> */}
              </InputsWrapper>
              <TextBox>
                Check out our color-coded floor plans to see which rooms you are likely to get!
                {floorplanLegend}
              </TextBox>
            </AboutLeft>
            <Disclaimer />
          </AboutWrapper>
        </Converter>
        {(errorMsg === "") ? null : <Error>{"* " + errorMsg}</Error>}
        <ShaftLiveContainer>
          <ColOne>
            <DormList lotteryNum={lotteryNum ? lotteryNum : 0} setSelectedDorm={handleDormChange} selectedDorm={dorm} />
          </ColOne>

          <ColTwo>
            <DormName>{dorm}</DormName>
            <FloorPlansRow>
              <FloorButton floorNums={floorNums} handleChange={handleFloorChange} />
              <FloorPlanWrapper>
                <FloorPlanSVG
                  priority={priority}
                  low={convertedNumLow}
                  high={convertedNumHigh}
                  dorm={dorm}
                  floor={floor}
                  data={floorData}
                  cutoffs={[]}
                  init={init}
                  dormRefresh={dormRefresh}
                  showInfo={false} >
                </FloorPlanSVG>
              </FloorPlanWrapper>
            </FloorPlansRow>
          </ColTwo>
        </ShaftLiveContainer>
      </Desktop>
    </div>
  )
};

export default ShaftLive;

const Disclaimer = () => {
  return (
    <DisclaimerWrapper>
      <DisclaimerTextBox className="disclaimer">Disclaimer:</DisclaimerTextBox>
      <DisclaimerTextBox>
        Historical Room Selection data is provided by Columbia Housing for reference only. The selection process shifts year to year and can change based on a number of variables that will impact how students pick rooms, including personal preferences, building availability, class size, external factors and more. This data should not be used a predictive tool nor does it provide any guarantee for selection options. Learn how our lottery predictor works to make the best use of its results.
      </DisclaimerTextBox>
    </DisclaimerWrapper>
  )
}

const floorplanLegend = (
  <FloorPlanLegend>
    <LegendItem>
      <ColorBox color={(props) => props.theme.green} /><h6>Likely</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.yellow} /><h6>Similar</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.red} /><h6>Unlikely</h6>
    </LegendItem>
    <LegendItem>
      <ColorBox color={(props) => props.theme.lightGray} /><h6>Unavailable</h6>
    </LegendItem>
  </FloorPlanLegend>
);
