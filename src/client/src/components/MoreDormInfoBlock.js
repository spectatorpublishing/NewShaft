import styled from "styled-components";
import React, { Component }  from "react";
import { theme } from "../util/GlobalStyles";

const DormInfoBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    border: 0.05rem solid ${theme.columbiaBlue};
    border-radius: 2%;
    padding: 2rem;
    margin-top: 1rem;

`;

const Bold = styled.div`
    font-weight: 800;
`;

const Regular = styled.div``;

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    width: 50%;

	@media (min-width: 1000px) {
      width: 33%;
      max-width: 33%;
      margin-right: 0em;
    }

    div {
        width: 80%;
    }

    font-family: 'Raleway', sans-serif;
    font-size: 20px;
`;

export default class MoreDormInfoBlock extends Component {
    constructor(props) {
        super(props);

        this.dormInfo = props.dormInfo;
        this.formatList = this.formatList.bind(this);

    }

    formatList(string) {
        let length = string.split(',').length;

        if (length === 1) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }

        let stringArr = string.split(',').map((word, index) => {
            if (index === length - 1) {
                return "& " + word.charAt(0).toUpperCase() + word.slice(1);
            }
            else if (index === length - 2) {
                return word.charAt(0).toUpperCase() + word.slice(1)
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1) + ","
            }
        })

        return stringArr.join(" ");
    }

    formatRooms(single, double, triple) {
        let string = "";

        if (single) {
            string += "singles"
        } 
        if (double) {
            if (single) {
                string += ","
            }
            string += "doubles"
        }
        if (triple) {
            string += ",triples"
        }
        
        return this.formatList(string);
    }

    render() {
        
        console.log(this.props.dormInfo)
        console.log(this.formatList("freshmen"))

        return (
        <DormInfoBlock>
            <TitleBlock>
                <Bold>{this.formatRooms(this.dormInfo.SINGLE_, this.dormInfo.DOUBLE_, this.dormInfo.TRIPLE_ )}</Bold>
                <Regular>dorms</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>{this.formatList(this.dormInfo.CLASS_MAKEUP)}</Bold>
                <Regular>residents</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>Per Floor</Bold>
                <Regular>{"kitchen"}</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>Per Suite</Bold>
                <Regular>{"bathroom"}</Regular>
            </TitleBlock>
        </DormInfoBlock>
        )
    }
};

