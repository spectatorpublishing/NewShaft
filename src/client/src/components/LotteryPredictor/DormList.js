import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../util/GlobalStyles';

const List = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 2rem;
    
    @media only screen and (max-width: 992px){
        padding: 0;
    }
`;

const DormButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border-radius: 10px;
    width: 80%;
    padding: .6rem;
    margin: .1rem 0;
    background-color: ${props => props.color};

    @media only screen and (max-width: 992px){
        width: 100%;
    }
`;

const DormName = styled.div`
    width: 30%;
    text-align: left;
    padding-left: 1rem;

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
    width: 25%;

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

const DormButton = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(true);
    }

    return (
        <DormButtonWrapper onClick={() => handleClick()} color={selected ? "rgba(196, 196, 196, 0.2)" : "white"}>
            <DormName>{props.dormName}</DormName>
            <BarWrapper>
                <ColorBar className="likely"></ColorBar>
                <ColorBar className="possible"></ColorBar>
                <ColorBar className="unlikely"></ColorBar>
                <ColorBar className="unavail"></ColorBar>
            </BarWrapper>
            <ArrowWrapper>
                <FontAwesomeIcon icon={faAngleRight} />
            </ArrowWrapper>
        </DormButtonWrapper>
    )
}

const DormList = ({ lotteryNum }) => {
    const [dorms, setDorms] = useState([]);

    useEffect(() => {
			// TODO: make sure that lotteryNum is or can be converted to a number
			// otherwise, the api call will fail and no bars will be displayed at al
			// can use a default value if conversion fails
      fetchDormInfo(lotteryNum)
    }, []);

    const fetchDormInfo = (lotteryNum) => {
		fetch(`/api/getLotteryInfo/${lotteryNum}`, {
			method: "GET",
			headers: { "Content-Type": "application/json"},
		})
			.then(res => res.json())
			.then(lotteryInfo => setDorms(
				lotteryInfo.map(({ DORM, LIKELY, SIM, UNLIKELY }) =>
					({
						DORM,
						RATIO: [LIKELY, SIM, UNLIKELY, "0"].map(x => parseInt(x))
					})
				)
			))
	}

    // props of DormButton tbd based on backend
    return (
        <List>
            {dorms.map((dorm, index) => {
                return (
                    <DormButton
                        key={index}
                        dormName={dorm.DORM}
                        ratio={dorm.RATIO}
                    ></DormButton>
                )
            })}
        </List>
    );
}

export default DormList;