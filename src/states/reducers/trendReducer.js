import { GET_TRENDS, LOADING_TRENDS, SEARCH_TRENDS } from "../actions/types";

const initialState = {
	data: [],
	result: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TRENDS:
			return {
				...state,
				data: action.payload,
				result: action.payload,
				loading: false,
			};
		case LOADING_TRENDS:
			return {
				...state,
				loading: true,
			};
		case SEARCH_TRENDS:
			return {
				...state,
				result: action.payload,
			};
		default:
			return state;
	}
};
