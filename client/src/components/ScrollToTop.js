import React, { Component } from "react";
import { useNavigate } from 'react-router';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component navigator={history} {...props}/>
    } 
    return Wrapper;
}

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children || null;
    }
  }
  
  export default withRouter(ScrollToTop)