import React, { Component } from 'react';
import searchButton from "./searchButton.png";
import styles from "./searchbar.css";

export default class SearchBar extends Component {
	render(){
		return <div>
			<input className="searchbar textEntry" type="text" />
			<input type="image" className="searchbar submitButton" src={searchButton} />
		</div>;
	}
}