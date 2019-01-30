import React, { Component } from "react";
import "../css/filter.css";

export default class FilterButton extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
	    	name: this.props.name,
	    	clicked: false
	    };

	    this.onClick = this.onClick.bind(this);
	}

	onClick() {
		var bool = this.state.clicked;
		this.setState({clicked: !bool})
	}

	render() {
		let btn_class = this.state.clicked ? "clickedFilter" : "nonclickedFilter";
		return (
			<div>
				<button key="barnard" className={btn_class} onClick={()=>this.onClick()}>{this.state.name}</button>
			</div>
		)
	}
}