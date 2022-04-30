import React, { Component } from "react";

export default class componentName extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	clickHandler = () => {
		this.setState((pt) => {
			return { count: pt.count + 1 };
		});
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<button onClick={this.clickHandler}>click {count} times</button>
			</div>
		);
	}
}
