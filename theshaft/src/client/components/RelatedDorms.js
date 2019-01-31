
/*
    RelatedDorms component.

    This component displays the related dorms of a given
    dorm page. The names and image sources for this component
    are to be passed into the component as an array.

    NOTE that the divs of this component are styled by
    RelatdDorms.css
*/

import React, { Component } from "react";
import "../css/RelatedDorms.css";
//var element = document.relatedDormsList.style;
//element.setPropety('--mw', '800px');

export default class RelatedDorms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*  Props format for this.props.relatedDorms 
                should be array of strings with the following:
                ["Dorm Name", "Image Source"]. 
                See example in storybook. */
            relatedDorms: this.props.relatedDorms
        };

        // Binds the showRelatedDorms() function to this constructor.
        this.showRelatedDorms = this.showRelatedDorms.bind(this);
    }

    /*  Displays related dorm information via the relatedDorms 
        prop that works as a two-index array. The title is passed
        from the [0] index and image source is passed from [0] of
        the property. 

        !!! ALERT !!!
        The title of the dorm needs to be pulled from a Title Component.
        */
    showRelatedDorms() {
        let index = 0
        return this.state.relatedDorms.map((relatedDorms) => {
          return <div className="relatedDorm" key={index++}>
            <img src={relatedDorms[1]} className="relatedDormImage" alt={relatedDorms[0]}/>
            <div className="relatedDormName"> {relatedDorms[0]} </div>
          </div>
          });
      }

    render() {
        return (
            <div className="relatedDormsList">
                {/* ===> The title component's text prop needs to be passed in here! <=== */}
                <h2 className="relatedDormsTitle"> If you're interested in {this.state.relatedDorms[0][0]} </h2>
                <div className="relatedDormsHorizontalView">
                    {this.showRelatedDorms()}
                </div>
            </div>
        );

    }
}
