import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { Container } from "reactstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<SearchBar />
				<CardList />
			</Container>
		</div>
	);
}

export default App;
