import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Card.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setDashboard } from "../../states/actions/dashboardActions";

class Card extends React.Component {

	onClick = () => {
		const payload = {
			flag: true,
			info: this.props.info
		}
		this.props.setDashboard(payload);
	}

	render() {

		const { name, party, id, state, handle, reply, toxic_reply, retweet, opposing } = this.props.info;

		return (
			<div className="wrapper">
				<Container className="card-container">
					<Row>
						<Col
							xs="4"
							className={
								party === "Democratic"
									? "info-democrat"
									: "info-republican"
							}
						>
							<p className="name">{name}</p>
							<p className="party">{party}</p>
							<p className="state">{state}</p>
							<p className="handle">{handle}</p>
						</Col>
						<Col xs="8" className="stats">
							<div className="stats-container">
								<div>
									<div className="reply">{reply}</div>
									<div className="reply-text">replies</div>
								</div>
								<div>
									<div className="toxic-reply">{toxic_reply}</div>
									<div className="toxic-reply-text">are toxic</div>
								</div>
								<div>
									<div className="opposing">{opposing}</div>
									<div className="opposing-text">
										are from opposing party
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<a
					href={
						handle === "none"
							? party === "Democratic"
								? "https://twitter.com/joebiden"
								: "https://twitter.com/realDonaldTrump"
							: `https://twitter.com/${handle}`
					}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="link-block">
						<div className="link-block-text">
							Twitter
						</div>
					</div>
				</a>
				<div className="link-block" style={{"left":"555px", "cursor":"pointer"}} onClick={this.onClick}>
					<div className="link-block-text" style={{"left": "100px"}}>
						Dashboard
					</div>
				</div>
			</div>
		);
	} 
};

Card.propTypes = {
	setDashboard: PropTypes.func.isRequired,
}

export default connect(null, { setDashboard })(Card);
