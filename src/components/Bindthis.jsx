import React, { Component } from "react";
import Message from "./Message";

export default class Bindthis extends Component {
	constructor() {
		super();
		this.state = {
			message: "Hello Class Base",
		};
		// this.newMessage = this.newMessage.bind(this);
	}
	/**
	 * regular function
	 *
	 */
	// newMessage() {
	// 	console.log(this);
	// 	this.setState({
	// 		message: "Hello good day",
	// 	});
	// }
	/**
	 * arrow function
	 */
	newMessage = () => {
		console.log(this);
		this.setState({
			message: "Hello good day",
		});
	};
	render() {
		return (
			<div>
				<p> {this.state.message} </p>
				{/* need to bind this  */}
				{/* <button onClick={this.newMessage.bind(this)}>
					New Message
				</button> */}
				{/* <button onClick={() => this.newMessage()}>show message</button> */}
				<button onClick={this.newMessage}>show message</button>
				{/* <button
					onClick={() =>
						this.setState((pv) => ({
							pv: (pv.message = "good day js"),
						}))
					}
				>
					change message
				</button> */}
			</div>
		);
	}
}
