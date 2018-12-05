import React, { Component } from 'react';

import DormButton from '../components/DormButton';
import './Explore.css';

export default class Explore extends Component {

    render() {
      return (
      <div>
        <div class="header">
          <h1>Explore The Shaft</h1>
          <div class="SchoolButton">Barnard</div>
          <div class="SchoolButton">Columbia</div>
        </div>
        <div class="DormButtons">
          <DormButton name="ADI House" address="21" sundial_distance="7 minutes" description="the best dorm"/>
          <DormButton name="ADI House" address="21" sundial_distance="7 minutes" description="the best dorm"/>
          <DormButton name="ADI House" address="21" sundial_distance="7 minutes" description="the best dorm"/>
          <DormButton name="ADI House" address="21" sundial_distance="7 minutes" description="the best dorm"/>
        </div>
      </div>
      );
    }
  }
