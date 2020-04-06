import styled from "styled-components";
import React, { Component }  from "react";
import { theme } from "../util/GlobalStyles";

const DormInfoBlock = styled.div`
    display: flex;
    flex-wrap: wrap;

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

    @media (max-width: 786px) {
        font-size: 17px;
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

    }

    formatList(string) {
        if (string != null) {
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
        return "";
        
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

        return (
        <DormInfoBlock>
            <TitleBlock>
                <Bold>{this.formatRooms(this.props.dormInfo.SINGLE_, this.props.dormInfo.DOUBLE_, this.props.dormInfo.TRIPLE_ )}</Bold>
                <Regular>dorms</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>{this.formatList(this.props.dormInfo.CLASS_MAKEUP)}</Bold>
                <Regular>residents</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>Per Floor</Bold>
                <Regular>{this.props.dormInfo.F_KITCHEN ? "kitchen" : "bathroom"}</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>Per Suite</Bold>
                <Regular>{this.props.dormInfo.P_KITCHEN ? "kitchen" : "bathroom"}</Regular>
            </TitleBlock>
        </DormInfoBlock>
        )
    }
};

