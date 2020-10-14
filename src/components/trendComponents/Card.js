import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Card.css";

const Card = ({ info }) => {
	const { name, party, id, state, handle, reply, toxic_reply, retweet, opposing } = info;

	return (
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
							{/* <img
								src={
									party === "Democratic"
										? require("../../assets/imgs/democrat.png")
										: require("../../assets/imgs/republican.png")
								}
								alt=""
								className="avatar"
							/> */}
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
				<p className="go-to-twitter">Check Twitter Profile</p>
			</div>
		</a>
	);
};

export default Card;
