import React, { Component } from "react";

export default class RegComponent extends Component {
	render() {
		console.log("Regular components");

		return (
			<div>
				<p>my name is {this.props.name}</p>
			</div>
		);
	}
}
