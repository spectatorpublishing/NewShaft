// Whiteboard Sidebar

import React, { Component } from "react";
import "../css/WhitebordSidebar.css";

export default class WhiteboardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {dorms: props.dorms};
    }

    render() {
        var dormsList = this.state.dorms.map((dorm, index) => (<Link key={index} to={"/" + dorm.id} 
        style={{ textDecoration: 'none' }}>
            <DormButton key={index} school={dorm.school} name={dorm.name} image={dorm.image}
                description={dorm.description} amenities={dorm.amenities}/></Link>)
            );
        return(
            <div className="WhiteboardSidebarWrapper">


            </div>

        );
    }
}



