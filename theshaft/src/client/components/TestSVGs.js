import React, { Component } from "react";

export default class TestSVG extends Component{
    constructor(props){
        super(props)

        this.state = {
            floorInfo: null
        }  
    }

    fetchSVGs(){
        fetch('/api/getFloorPlanSVGs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify()
            body: {
                DORM: this.props.dorm
            }
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            this.setState({floorInfo: response})
        });    
    }

    render(){
        this.fetchSVGs();
        
        return (
            <div>
              {this.state.floorInfo != null ? this.state.floorInfo.map((el) => <svg version="1.1" xmlns={el.SVG}/>) : null}
            </div>
          );
    }
}