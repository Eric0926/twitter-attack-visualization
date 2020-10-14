import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearchChange }) => {
	const [input, setInput] = useState("");

	const onInputChange = (e) => {
		setInput(e.target.value);
		onSearchChange(e.target.value);
	};

	return (
		<div className="searchbar-container">
			<h2 className="heading">Twitter Activities in Last 1 Hour</h2>
			<div className="search-container">
				<input
					type="text"
					id="search-input"
					value={input}
					onChange={onInputChange}
					placeholder="Search candidates by name, party, state, or TwitterID"
				/>

				<i className="fa fa-search search-icon" aria-hidden="true" />
			</div>
		</div>
	);
};

export default SearchBar;
