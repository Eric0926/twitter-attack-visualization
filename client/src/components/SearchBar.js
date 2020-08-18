import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className="searchbar-container">
			<h2 className="heading">Twitter Attacks in Last 6 Hours</h2>
			<div className="search-container">
				<input
					type="text"
					id="search-input"
					placeholder="Search candidates by name, TwitterID or state..."
				/>

				<i className="fa fa-search search-icon" aria-hidden="true" />
			</div>
		</div>
	);
};

export default SearchBar;
