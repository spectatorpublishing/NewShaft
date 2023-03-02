import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

import DormButton from "./DormButton";

const Dorms = styled.div`
  margin: 0 auto;
  padding: 0 5%;
  margin-top: 2vh;
  overflow: scroll;
  max-height: 70vh;
  display: grid;
  grid-column-gap: 5%;
  grid-template-columns: 47.5% 47.5%;
`;

const DormLink = styled(Link)`
  text-align: left;
`;

export default class ExploreSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dorms: this.props.dorms,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setState({ dorms: this.props.dorms });
    }
  }

  render() {
    return (
      <div>
        <Dorms>
          {this.state.dorms.map((dorm, index) => (
            <DormLink
              key={index}
              to={"/explore/" + dorm.DORM.replace(/\s+/g, "-")}
              style={{ textDecoration: "none" }}
            >
              <DormButton
                key={index}
                school={dorm.COLLEGE}
                name={dorm.DORM}
                image={dorm.IMAGE_LINK}
                class_makeup={dorm.CLASS_MAKEUP}
                SINGLE_={dorm.SINGLE_}
                DOUBLE_={dorm.DOUBLE_}
                WALKTHROUGH={dorm.WALKTHROUGH}
                TRIPLE_={dorm.TRIPLE_}
                SUITE_={dorm.SUITE_}
              />
            </DormLink>
          ))}
        </Dorms>
      </div>
    );
  }
}
