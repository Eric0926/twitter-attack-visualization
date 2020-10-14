import axios from "axios";
import { GET_TRENDS, LOADING_TRENDS, SEARCH_TRENDS } from "./types";

export const getTrends = () => (dispatch) => {
	dispatch(setTrendsLoading());
	axios
		.get("./fetchLastHour")
		.then((res) =>{
			dispatch({
				type: GET_TRENDS,
				payload: res.data.stats,
			});
		}
		)
		.catch((err) => console.log(err));
};

export const setTrendsLoading = () => ({
	type: LOADING_TRENDS,
});

export const searchTrends = (result) => (dispatch) => {
	dispatch({
		type: SEARCH_TRENDS,
		payload: result,
	});
};
