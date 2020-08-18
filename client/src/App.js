import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { Container } from "reactstrap";

function App() {
	const data = [
		{
			name: "Shelly",
			party: "Republican",
			state: "Texas",
			twitterID: "Shellyyyyy",
			reply: 317,
			toxic: 125,
			opposing: 231,
		},
		{
			name: "Jimmy",
			party: "Democrat",
			state: "New York",
			twitterID: "Jimmy567",
			reply: 496,
			toxic: 101,
			opposing: 20,
		},
		{
			name: "Jasmine",
			party: "Republican",
			state: "Pennsylvania",
			twitterID: "Jaaasmine",
			reply: 412,
			toxic: 42,
			opposing: 653,
		},
		{
			name: "Tony",
			party: "Republican",
			state: "Florida",
			twitterID: "Tonyrocks",
			reply: 12,
			toxic: 2,
			opposing: 12,
		},
	];

	const [result, setResult] = useState(data);

	const onSearchChange = (value) => {
		let key = value.trim().toLowerCase();
		if (key.length > 0) {
			setResult(
				data.filter(
					(item) =>
						item.name.toLowerCase().match(key) ||
						item.state.toLowerCase().match(key) ||
						item.party.toLowerCase().match(key) ||
						item.twitterID.toLowerCase().match(key)
				)
			);
		} else {
			setResult(data);
		}
	};

	return (
		<div className="App">
			<Container>
				<SearchBar onSearchChange={onSearchChange} />
				<CardList data={result} />
			</Container>
		</div>
	);
}

export default App;
