import React, { Component } from "react";

export default class Message extends Component {
	constructor() {
		super();
		this.state = {
			subscribeMessage: "Subscribe here",
			unscribeMessage: "UnSubscribe success",
			hobby: ["running", "coding"],
			show: false,
		};
	}
	changeMessage() {
		this.setState({
			message: "Thanks For Subscribe",
			show: !this.state.show,
		});
	}
	render() {
		return (
			<div>
				{this.state.show === false ? (
					<p>{this.state.subscribeMessage}</p>
				) : (
					<p>{this.state.unscribeMessage}</p>
				)}
				{this.state.show === false ? (
					<button onClick={() => this.changeMessage()}>
						Subscribe
					</button>
				) : (
					<button onClick={() => this.changeMessage()}>
						UnSubscribe
					</button>
				)}
			</div>
		);
	}
}
