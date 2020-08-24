import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Card.css";

const Card = ({ info }) => {
	const { name, party, state, twitterID, reply, toxic, retweet } = info;

	return (
		<a
			href={
				twitterID === "none"
					? party === "Democrat"
						? "https://twitter.com/joebiden"
						: "https://twitter.com/realDonaldTrump"
					: `https://twitter.com/${twitterID}`
			}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="wrapper">
				<Container className="card-container">
					<Row>
						<Col
							xs="4"
							className={
								party === "Democrat"
									? "info-democrat"
									: "info-republican"
							}
						>
							<img
								src={
									party === "Democrat"
										? require("../../assets/imgs/democrat.png")
										: require("../../assets/imgs/republican.png")
								}
								alt=""
								className="avatar"
							/>
							<p className="name">{name}</p>
							<p className="party">{party}</p>
							<p className="state">{state}</p>
							<p className="twitter-id">{twitterID}</p>
						</Col>
						<Col xs="8" className="stats">
							<div className="stats-container">
								<div>
									<div className="reply">{reply}</div>
									<div className="reply-text">replies</div>
								</div>
								<div>
									<div className="toxic">{toxic}</div>
									<div className="toxic-text">are toxic</div>
								</div>
								<div>
									<div className="opposing">{retweet}</div>
									<div className="opposing-text">
										retweets
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<p className="go-to-twitter">Check Twitter Profile</p>
			</div>
		</a>
	);
};

export default Card;
