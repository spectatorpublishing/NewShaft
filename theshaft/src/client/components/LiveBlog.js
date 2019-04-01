import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class LiveBlog extends Component {
  render() {
    return (
      <div>
        <div id="LB24_LIVE_CONTENT" data-eid="2225113207560185066" />
        <Helmet>
          <script src="https://v.24liveblog.com/24.js" />
        </Helmet>
      </div>
    );
  }
}
