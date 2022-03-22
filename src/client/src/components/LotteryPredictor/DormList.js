import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../util/GlobalStyles';

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
    
    @media only screen and (max-width: 992px){
        padding: 0;
        height: 100%;
        width: 100%;
    }
`;

const DormButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    padding: .6rem;
    margin: .1rem 0;
    background-color: ${props => props.color};
`;

const DormName = styled.div`
    width: 30%;
    text-align: left;
    padding-left: 1rem;
    font-family: Georgia;
    font-weight: bold;
    color: ${props => props.textColor};

    @media only screen and (max-width: 992px){
        width: 40%;
        margin-right: 1rem;
    }
`;

const BarWrapper = styled.div`
    height: .6rem;
    width: 60%;
    display: flex;
    flex-direction: row;
    border-radius: 0px;
    align-self: center;
    @media only screen and (max-width: 992px){
        width: 50%;
    }
`;

const ColorBar = styled.div`
    // placeholder for testing
    width: ${(props) => props.width}%;

    &.likely{
        background-color: ${(props) => props.theme.green};
    }
    &.possible{
        background-color: ${(props) => props.theme.yellow};
    }
    &.unlikely{
        background-color: ${(props) => props.theme.red};
    }
    &.unavail{
        background-color: ${(props) => props.theme.lightGray};
    }
`;

const ArrowWrapper = styled.div`
    padding: 0 1rem 0 2rem;
    color: #707070;
    @media only screen and (max-width: 992px){
        padding: 0 1rem;
    }
`;

const defaultDorms = ["47 Claremont","Broadway Hall","Carlton Arms","East Campus","Furnald Hall","Harmony Hall","Hogan Hall","McBain Hall","600 W 113th","River Hall","Ruggles Hall", "Schapiro Hall","Watt Hall","Wien Hall","Woodbridge Hall"]

const DormButton = (props) => {
    const [isSelected, setSelected] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(props.ratio[0] + props.ratio[1] + props.ratio[2] + props.ratio[3])
    }, [props.ratio]);

    useEffect(() => {
        if (props.dormName === props.selectedDorm){
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [props.selectedDorm]);

    const handleClick = () => {
        setSelected(true);
        props.setSelectedDorm(props.dormName);
    }

    const setWidth = (ratio) => {
        var width = (ratio / total) * 100;
        return width.toString().substring(0, 4);
    }

    return (
        <DormButtonWrapper onClick={() => handleClick()} color={isSelected ? "rgba(196, 196, 196, 0.2)" : "white"}>
            <DormName textColor={isSelected ? theme.columbiaBlue : "black"}>{props.dormName}</DormName>
            <BarWrapper>
                <ColorBar width={props.ratio ? setWidth(props.ratio[0]) : "25"} className="likely"></ColorBar>
                <ColorBar width={props.ratio ? setWidth(props.ratio[1]) : "25"} className="possible"></ColorBar>
                <ColorBar width={props.ratio ? setWidth(props.ratio[2]) : "25"} className="unlikely"></ColorBar>
                <ColorBar width={props.ratio ? setWidth(props.ratio[3]) : "25"} className="unavail"></ColorBar>
            </BarWrapper>
            <ArrowWrapper>
                <FontAwesomeIcon icon={faAngleRight} />
            </ArrowWrapper>
        </DormButtonWrapper>
    )
}

const DormList = ({ lotteryNum, setSelectedDorm, selectedDorm }) => {
    // controls setting of data on initial load
    const [initialLoad, setInitial] = useState(1);
    const [dorms, setDorms] = useState(defaultDorms.map(dorm =>
                                    ({
                                        DORM: dorm,
                                        RATIO: [25, 25, 25, "0"].map(x => parseInt(x))
                                    })
                                    ));

    useEffect(() => {
        // TODO: make sure that lotteryNum is or can be converted to a number
        // otherwise, the api call will fail and no bars will be displayed at al
        // can use a default value if conversion fails
        if (!initialLoad)
            fetchDormInfo(lotteryNum)
        else
            setInitial(0)
    }, [lotteryNum]);

    const fetchDormInfo = (lotteryNum) => {
        if (lotteryNum.toString() === "0"){
            // if empty set to default
            setDorms(defaultDorms.map(dorm =>
                ({
                    DORM: dorm,
                    RATIO: [25, 25, 25, "0"].map(x => parseInt(x))
                })
            ));
        } else {
            fetch(`/api/getLotteryInfo/${lotteryNum}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
                .then(res => res.json())
                .then(lotteryInfo => setDorms(
                    lotteryInfo.map(({ DORM, LIKELY, SIM, UNLIKELY }) =>
                    ({
                        DORM,
                        RATIO: [UNLIKELY, SIM, LIKELY, "0"].map(x => parseInt(x))
                    })
                    )
                ))
            }
    }

    return (
        <List>
            {dorms.map((dorm, index) => {
                return (
                    <DormButton
                        key={index}
                        dormName={dorm.DORM}
                        ratio={dorm.RATIO}
                        setSelectedDorm={setSelectedDorm}
                        selectedDorm={selectedDorm}
                    ></DormButton>
                )
            })}
        </List>
    );
}

export default DormList;