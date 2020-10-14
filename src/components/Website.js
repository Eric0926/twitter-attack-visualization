import React, { Component } from 'react'
import Dashboard from "./Dashboard";
import Trends from "./Trends";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Website extends Component {
    render() {
        return (
            <div>
                {this.props.dashboard.flag === false 
                ? <Trends />
                : <Dashboard />  
                }
            </div>
        )
    }
}

Website.propTypes = {
	dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    dashboard: state.dashboard
})

export default connect(mapStateToProps)(Website);
