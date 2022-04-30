import React, { Component, PureComponent } from "react";

export default class PureCom extends PureComponent {
	render() {
		console.log("pure components");
		return (
			<div>
				<p>my name is {this.props.name}</p>
			</div>
		);
	}
}
