import React, { Component } from "react";
import SocialMediaIcons from 'react-social-media-icons';


let SocialIcons = [
    {
    url: 'https://github.com',
    className: 'fa-github-square',
    },
    {
    url: 'https://twitter.com/',
    className: 'fa-twitter-square',
    },
    {
    url: 'https://www.instagram.com/',
    className: 'fa-instagram',
    },
];

export default class SocialMedia extends React.Component {
      
    render () {
        return (
            <div>
            <SocialMediaIcons
                icons={SocialIcons}
                iconSize={'1.3em'}
                iconColor={'#161008'}
            />
            </div>  
        );
    }      

}
