import React, { Component } from "react";
import AdSense from 'react-adsense';

export default class Ads extends Component {

  componentWillMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.async = true;
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

    head.appendChild(script);
  }

  render() {
    return (
      <div className="Ads">
          <AdSense.Google
              client='ca-pub-1234567891234567'
              slot='1234567890'
              />
          <br/>
      </div>
    );
  }
}
