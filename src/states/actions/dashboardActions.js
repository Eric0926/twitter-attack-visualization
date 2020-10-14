import axios from "axios";
import { SET_DASHBOARD } from "./types";

export const setDashboard = (payload) => (dispatch) => {
    dispatch({
        type: SET_DASHBOARD,
        payload
    })
}