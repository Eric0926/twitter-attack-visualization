import { SET_DASHBOARD } from "../actions/types";

const initialState = {
    stats: [],
    flag: false,
    info: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DASHBOARD:
            return {
                ...state,
                flag: action.payload.flag,
                info: action.payload.info
            }
        default:
            return state;
    }
}