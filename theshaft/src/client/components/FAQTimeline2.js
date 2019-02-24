import React, { Component } from "react";
import styled from 'styled-components';
import '../css/FAQTimeline.css';

// let Contaienr = styled.div`

// `

// let List = styled.ul`
//     list-style: none;
//     padding: 10px 0 10px;
//     position: relative;
//     width: 420px;

//         &:before {
//             background-color: #eee;
//             bottom: 0;
//             content: " ";
//             left: 50px;
//             margin-left: -1.5px;
//             position: absolute;
//             top: 0;
//             width: 3px;
//         }
    
//         > li {
//             margin-bottom: 10px;
//             position: relative;
    
//             &:before,
//             &:after {
//                 content: " ";
//                 display: table;
//             }
    
//             &:after {
//                 clear: both;
//             }

//             > .timeline-bubble {
//                 border-radius: 2px;
//                 border: 1px solid #d4d4d4;
//                 box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2);
//                 margin-left: 100px;
//                 padding: 20px;
//                 position: relative;

//                 .timeline-date {
//                     position: absolute;
//                     right: 8px;
//                     top: 5px;
//                 }

//                 &:hover {
//                     color: #333;
//                     text-decoration: none;
//                     cursor: pointer;
//                   }
//             }

//         }
//     }
// `

export default class FAQTimeline extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="container">
                <head>Timeline</head>
                <body>
                    <div className="timeline">
                        <ul>
                            <li>
                                <div class="content">
                                    <h3>March 8</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </body>

            </div>
        );
    }

}