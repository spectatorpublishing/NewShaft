import styled from "styled-components";
import React, { Component }  from "react";
import { theme } from "../util/GlobalStyles";

const DormInfoBlock = styled.div`
    display: flex;
    flex-direction: column;

    border: 0.05rem solid ${theme.columbiaBlue};
    border-radius: 2%;
    padding: .5rem 2rem;
    margin-top: 1rem;
`;

const Bold = styled.p`
    font-weight: 800;
    margin-right: .2rem;
    font-size: inherit;
`;

const Italic = styled.p`
    font-style: italic;
    margin-right: .2rem;
    font-size: inherit;
`;

const Regular = styled.p`
    margin-right: .2rem;
    font-size: inherit;
`;

const TitleBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: .75rem 0;

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
                return string.charAt(0).toUpperCase() + string.slice(1, -1)
            }

            let stringArr = string.split(',').map((word, index) => {
                if (index === length - 1) {
                    return "& " + word.charAt(0).toUpperCase() + word.slice(1, -1);
                }
                else if (index === length - 2) {
                    return word.charAt(0).toUpperCase() + word.slice(1, -1)
                } else {
                    return word.charAt(0).toUpperCase() + word.slice(1, -1) + ","
                }
            })

            return stringArr.join(" ");
        }
        return "";

    }

    formatRooms(single, double, triple) {
        let string = "";

        if (single) {
            string += "Singles"
        }
        if (double) {
            if (single) {
                string += " & "
            }
            string += "Doubles"
        }
        if (triple) {
            string += " & Triples"
        }

        return this.formatList(string);
    }



    render() {

        return (
        <DormInfoBlock>
            <TitleBlock>
                <Regular>{this.props.dormInfo.SUITE ? "Suite" : "Corridor"}</Regular>
                <Italic>style</Italic>
            </TitleBlock>
            <TitleBlock>
                <Bold>{this.formatRooms(this.props.dormInfo.SINGLE_, this.props.dormInfo.DOUBLE_, this.props.dormInfo.TRIPLE_ )}</Bold>
                <Italic><Bold>dorms</Bold></Italic>
            </TitleBlock>
            <TitleBlock>
                <Regular>Lottery</Regular>
                <Italic>####</Italic>
            </TitleBlock>
            <TitleBlock>
                <Regular>{this.props.dormInfo.F_KITCHEN ? "Per floor" : this.props.dormInfo.P_KITCHEN ? "Per suite" : "No"}</Regular>
                <Italic>kitchen</Italic>
            </TitleBlock>
            <TitleBlock>
            <Regular>{this.props.dormInfo.P_BATHROOM ? "Per suite" : "Shared"}</Regular>
                <Italic>bathroom</Italic>
            </TitleBlock>
            <TitleBlock>
                <Bold>{this.formatList(this.props.dormInfo.CLASS_MAKEUP)}</Bold>
                <Italic><Bold>residents</Bold></Italic>
            </TitleBlock>
        </DormInfoBlock>
        )
    }
};
