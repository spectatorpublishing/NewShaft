import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentWillMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
  
      script.async = true;
      script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  
      head.appendChild(script);
    }

render () {
    return (
      <div>
        <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-7292810486004926'
        data-ad-slot='7806394673'
        data-ad-format='auto' />
      </div>  
    );
  }
}