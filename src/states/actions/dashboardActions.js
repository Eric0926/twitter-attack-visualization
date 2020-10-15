import axios from "axios";
import { SET_DASHBOARD, FETCH_N_DAYS } from "./types";

export const setDashboard = (payload) => (dispatch) => {
    dispatch({
        type: SET_DASHBOARD,
        payload
    })
}

export const fetchNDays = (payload) => (dispatch) => {
    const { candidate_id, n_days } = payload;
    axios({
        method: "post",
        url: "./fetchLastNDays",
        data: {
            "candidate_id": candidate_id,
            "n_days": n_days
        },
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) =>{
            const { stats } = res.data;
            const labels = stats.map((stat) => (stat.date));
            
            const options1 = {...initialOptions};
            options1.label = "reply";
            options1.data = stats.map((stat) => (stat.reply));
            
            const options2 = {...initialOptions};
            options2.label = "toxic";
            options2.data = stats.map((stat) => (stat.toxic_reply));
            options2.borderColor = "#ffd166";
            options2.pointBorderColor = "#ffd166";
            options2.pointHoverBackgroundColor = "#ffd166";
            
            const options3 = {...initialOptions};
            options3.label = "opposing";
            options3.data = stats.map((stat) => (stat.opposing));
            options3.borderColor = "#06d6a0";
            options3.pointBorderColor = "#06d6a0";
            options3.pointHoverBackgroundColor = "#06d6a0";
            
            const options4 = {...initialOptions};
            options4.label = "retweet"
            options4.data = stats.map((stat) => (stat.retweet));
            options4.borderColor = "#118ab2";
            options4.pointBorderColor = "#118ab2";
            options4.pointHoverBackgroundColor = "#118ab2";
            
            const data = {
                labels,
                datasets: [options1, options2, options3, options4]
            }
            dispatch({
                type: FETCH_N_DAYS,
                payload: {stats, data, n_days}
            });
        })
        .catch((err) => console.log(err));
}

const initialOptions = {
    lineTension: 0.2,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ef476f',
    borderCapStyle: 'butt',
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#ef476f',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 7,
    pointHoverBackgroundColor: '#ef476f',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
}