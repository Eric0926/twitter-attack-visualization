import React, { Component } from 'react'
import "./Dashboard.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setDashboard, fetchNDays } from "../states/actions/dashboardActions";
import avatar from "../assets/imgs/empty-avatar.png";
import { Line } from "react-chartjs-2";

class Dashboard extends Component {

    componentDidMount() {
        const { id } = this.props.dashboard.info;
        const payload = {
            candidate_id: id,
            n_days: 7
        }
        this.props.fetchNDays(payload);
    }

    onBack = () => {
        const payload = {
			flag: false,
			info: {}
		}
        this.props.setDashboard(payload);
    }

    changePeriod = (n_days) => {
        if (this.props.dashboard.n_days !== n_days) {
            const { id } = this.props.dashboard.info;
            const payload = {
                candidate_id: id,
                n_days
            }
            this.props.fetchNDays(payload);
        }
    }

    render() {

        const { name, party, handle, position, reply, toxic_reply, opposing, retweet } = this.props.dashboard.info;

        const { data } = this.props.dashboard;


        return (
            <div className="container-dashboard">
                <div className="back" >
                    <div className="back-button" onClick={this.onBack}>
                        {"< Back"}
                    </div>
                </div>
                <div className="dashboard">
                    <div className="col-left">
                        <img src={avatar}
                        alt=""
                        className="avatar"/>
                        <div className="info">
                            <div className="name">
                                {name}
                            </div>
                            <div className="party">
                                {party}
                            </div>
                            <div className="handle">
                                {position}
                            </div>
                            <a
                                href={
                                    `https://twitter.com/${handle}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="position"
                            >
                                <div >
                                    {handle}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="row-cards">
                            <div className="smallcard-container">
                                <div className="text">
                                    Reply
                                </div>
                                <div className="number">
                                    {reply}
                                </div>
                            </div>
                            <div className="smallcard-container">
                                <div className="text">
                                    Toxic
                                </div>
                                <div className="number">
                                    {toxic_reply}
                                </div>
                            </div>
                            <div className="smallcard-container">
                                <div className="text">
                                    Opposing
                                </div>
                                <div className="number">
                                    {opposing}
                                </div>
                            </div>
                            <div className="smallcard-container">
                                <div className="text">
                                    Retweet
                                </div>
                                <div className="number">
                                    {retweet}
                                </div>
                            </div>
                        </div>
                        <div className="row-chart">
                            <div className="chart-container">
                                <Line
                                    data={data}
                                    options={{
                                        legend: {
                                            labels: {
                                                fontColor: "#fffcf2"
                                            }
                                        },
                                        scales: {
                                            xAxes: [{
                                                gridLines: {
                                                    color: "#252422"
                                                },
                                                ticks: {
                                                    fontColor: "#fffcf2"
                                                }
                                            }],
                                            yAxes: [{
                                                gridLines: {
                                                    color: "#252422"
                                                },
                                                ticks: {
                                                    fontColor: "#fffcf2"
                                                }
                                            }],
                                        }
                                    }}
                                />
                            </div>
                            <div className="button-group">
                                <button className="button" autoFocus onClick={() => this.changePeriod(7)}>7-D</button>
                                <button className="button" onClick={() => this.changePeriod(14)}>14-D</button>
                                <button className="button" onClick={() => this.changePeriod(28)}>28-D</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    setDashboard: PropTypes.func.isRequired,
    fetchNDays: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard
});

export default connect(mapStateToProps, { setDashboard, fetchNDays })(Dashboard);
