import React, { Component } from "react";
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        console.log("scrolled to top");
        window.scrollTo(0, 0);
        // debugger;
      }
    }
  
    render() {
      return this.props.children || null;
    }
  }
  
  export default withRouter(ScrollToTop)