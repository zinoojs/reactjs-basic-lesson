import React, { Component } from "react";
import CompoC from "./CompoC";
import UserContext from "./userContext";

class CompoB extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				<h2>thi si {this.context} </h2>
				<CompoC />
			</div>
		);
	}
}
// CompoB.contextType = UserContext;
export default CompoB;
