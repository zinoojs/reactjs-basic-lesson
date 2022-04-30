import React from "react";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassord] = useState("");
	const person = {
		name: "",
		email: "",
		password: "",
	};

	function submitHandlar(e) {
		e.preventDefault();
		person.name = name;
		person.email = email;
		person.password = password;
		console.log(person);
	}
	function handleNameChange(e) {
		// console.log(e.target.value);
		setName(e.target.value);
	}
	function handleEmailChange(e) {
		// console.log(e.target.value);
		setEmail(e.target.value);
	}
	function handlePasswordChange(e) {
		// console.log(e.target.value);
		setPassord(e.target.value);
	}
	const css = {
		display: "block",
		marinBottom: "10px",
		padding: "13px",
	};
	return (
		<div className=''>
			<form onSubmit={submitHandlar}>
				<input
					type='text'
					placeholder='Your name'
					value={name}
					onChange={handleNameChange}
					style={css}
				/>
				<input
					type='email'
					placeholder='Your email'
					value={email}
					onChange={handleEmailChange}
					style={css}
				/>
				<input
					type='password'
					placeholder='Your password'
					value={password}
					onChange={handlePasswordChange}
					style={css}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default Form;
