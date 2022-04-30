import React, { Component } from "react";
import InputRef from "./InputRef";

export default class FwInput extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
	}
	clickHandlar = () => {
		this.inputRef.current.focus();
	};
	render() {
		return (
			<div>
				<InputRef ref={this.inputRef} />
				<button onClick={this.clickHandlar}>Focus</button>
			</div>
		);
	}
}
