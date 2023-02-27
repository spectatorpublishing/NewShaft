import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class LiveBlog extends Component {
  render() {
    return (
      <div>
        <iframe name="lb24" frameborder="0" height="960px" width="100%" class="lb24-iframe" scrolling="auto" src="https://v.24liveblog.com/iframe/?id=2225084296222713052"></iframe>
        <Helmet>
          <script src="https://v.24liveblog.com/24.js" />
        </Helmet>
      </div>
    );
  }
}

