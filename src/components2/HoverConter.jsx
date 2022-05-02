import React, { Component } from "react";

export default class HoverConter extends Component {
	render() {
		const { count, increseCount } = this.props;

		return (
			<div>
				<h3 onMouseOver={increseCount}>{count}</h3>
			</div>
		);
	}
}
