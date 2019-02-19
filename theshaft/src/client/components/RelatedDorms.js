
/*
    RelatedDorms component.
    This component displays the related dorms of a given
    dorm page. The names and image sources for this component
    are to be passed into the component as an array.
*/

import React, { Component } from "react";
import "../css/RelatedDorms.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

let RelatedDormsList = styled.div`
    /* border: 1px black solid;
    border-radius: 1px;  */
    width: 100%
    max-height: 40vw;
    height: 30vw;
`

let RelatedDormsTitle = styled.div`
    color: grey;
    font-weight: bolder;
    font-size: 2vw;
    margin: 4vw 0vw 1vw 0.5vw;
`

let RelatedDormsHorizontalView = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
`

let RelatedDormImage = styled.img`
    height: 6.5vw;
    width: 6.5vw;
    margin: 0.3vw 0.3vw 0.3vw 0.3vw;
`

let RelatedDormName = styled.div`
    margin: 0px 0 0 1.3vw;
    color: grey;
`


export default class RelatedDorms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*  Props format for this.props.relatedDorms 
                should be array of strings with the following:
                ["Dorm Name", "Image Source", "Dorm Link"]. 
                See example in storybook. */
            name: this.props.name,
            relatedDorms: this.props.relatedDorms
        };

        // Binds the showRelatedDorms() function to this constructor.
        // this.showRelatedDorms = this.showRelatedDorms.bind(this);
    }

    /*  Displays related dorm information via the relatedDorms 
        prop that works as a two-index array. The title is passed
        from the [0] index and image source is passed from [0] of
        the property. 
        !!! ALERT !!!
        The title of the dorm needs to be pulled from a Title Component.
        */

    // showRelatedDorms(dorms) {
    //     let index = 0
    //     console.log(`DORMS DORMS: ${dorms}`);
    //     return dorms.map((relatedDorms) => {
    //       return <Router>
    //         <Link to={"/" + relatedDorms.id} style={{ textDecoration: 'none' }} className="relatedDorm" key={index++}>
    //             <img src={relatedDorms.image} className="relatedDormImage" alt={relatedDorms.name}/>
    //             <div className="relatedDormName"> {relatedDorms.name} </div>
    //         </Link>
    //       </Router>
    //       });
    //   }

    render() {
        var relatedDormsList = this.state.relatedDorms.map((dorm, index) => (<Link key={index} to={"/" + dorm.id} style={{ textDecoration: 'none' }}><img src={dorm.image} className="relatedDormImage" alt={dorm.name}/><div className="relatedDormName"> {dorm.name} </div></Link>));
        return (
            <RelatedDormsList>
                {/* ===> The title component's text prop needs to be passed in here! <=== */}

                <h2 className="relatedDormsTitle"> If you're interested in {this.state.name} </h2>
                <div className="relatedDormsHorizontalView">
                    {relatedDormsList}
                    {/* {this.showRelatedDorms(dorms)} */}
                </div>
            </div>
        );
    }
}