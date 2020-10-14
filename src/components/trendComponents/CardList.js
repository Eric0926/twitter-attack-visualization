import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ data }) => {
	return (
		<div className="card-list">
			<TransitionGroup>
				{data.map((info) => (
					<CSSTransition
						key={info.name}
						timeout={200}
						classNames="fade"
					>
						<Card info={info} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default CardList;
