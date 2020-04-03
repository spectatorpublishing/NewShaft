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
    margin-right: 2rem;

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
    }

    render() {
        return (
        <DormInfoBlock>
            <TitleBlock>
                <Bold>{"Corridor"}</Bold>
                <Regular>style</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>{"Single & Doubles"}</Bold>
                <Regular>dorms</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>{"Sophomore & Junior"}</Bold>
                <Regular>residents</Regular>
            </TitleBlock>
            <TitleBlock>
                <Bold>Lottery #</Bold>
                <Regular>{"1200-2312"}</Regular>
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

