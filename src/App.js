import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Website from "./components/Website";

import { Provider } from "react-redux";
import store from "./states/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Website />
			</div>
		</Provider>
	);
}

export default App;
