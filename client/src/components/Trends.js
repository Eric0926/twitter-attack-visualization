import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import SearchBar from "./trendComponents/SearchBar";
import CardList from "./trendComponents/CardList";
import "./Trends.css";

import { getTrends, searchTrends } from "../states/actions/trendActions";

class Trends extends Component {
	componentDidMount() {
		this.props.getTrends();
	}

	onSearchChange = (value) => {
		let key = value.trim().toLowerCase();
		const { data } = this.props.trends;
		if (key.length > 0) {
			const result = data.filter(
				(item) =>
					item.name.toLowerCase().match(key) ||
					item.state.toLowerCase().match(key) ||
					item.party.toLowerCase().match(key) ||
					item.twitterID.toLowerCase().match(key)
			);
			this.props.searchTrends(result);
		} else {
			this.props.searchTrends(data);
		}
	};

	render() {
		return (
			<div className="Trend">
				<div className="search-bar">
					<SearchBar
						onSearchChange={this.onSearchChange.bind(this)}
					/>
					<div className="effect1"></div>
				</div>
				<Container className="card-list">
					<CardList data={this.props.trends.result} />
				</Container>
			</div>
		);
	}
}

Trends.propTypes = {
	trends: PropTypes.object.isRequired,
	getTrends: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	trends: state.trends,
});

export default connect(mapStateToProps, { getTrends, searchTrends })(Trends);
