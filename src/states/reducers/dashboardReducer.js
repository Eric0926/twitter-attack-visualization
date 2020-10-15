import { SET_DASHBOARD, FETCH_N_DAYS } from "../actions/types";

const initialState = {
    stats: [],
    flag: false,
    info: {},
    data: {},
    n_days: 7
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DASHBOARD:
            return {
                ...state,
                flag: action.payload.flag,
                info: action.payload.info
            }
        case FETCH_N_DAYS:
            return {
                ...state,
                stats: action.payload.stats,
                data: action.payload.data,
                n_days: action.payload.n_days
            }
        default:
            return state;
    }
}