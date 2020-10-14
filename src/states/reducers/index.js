import { combineReducers } from "redux";
import trendReducer from "./trendReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
	trends: trendReducer,
	dashboard: dashboardReducer
});
