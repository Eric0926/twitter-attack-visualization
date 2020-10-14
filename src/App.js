import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Trends from "./components/Trends";

import { Provider } from "react-redux";
import store from "./states/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Trends />
			</div>
		</Provider>
	);
}

export default App;
