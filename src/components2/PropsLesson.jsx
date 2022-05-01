import React, { Component } from "react";

export default class PropsLesson extends Component {
	render() {
		const { name } = this.props;
		return (
			<div>
				<p>my name is {this.props.name(true)} </p>
				<p>my name is {name(false)} </p>
			</div>
		);
	}
}
