import React, { Component } from "react";

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			name: "zinoo",
		};
	}
	increseCount = () => {
		this.setState((prev) => {
			return { count: prev.count + 1 };
		});
	};
	render() {
		return (
			<div>
				{this.props.children(this.state.count, this.increseCount)}
			</div>
		);
	}
}
