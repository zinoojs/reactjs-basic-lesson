import React, { Component } from "react";
import ChildCompo from "./ChildCompo";

export default class ParentComponents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parentName: "U Ba",
		};
	}
	getName = (name) => {
		console.log(
			`father name is ${this.state.parentName} and mother name is ${name}`
		);
		return `father name is ${this.state.parentName} and mother name is ${name}`;
	};

	render() {
		return (
			<div>
				<ChildCompo myHandler={this.getName} />
			</div>
		);
	}
}
