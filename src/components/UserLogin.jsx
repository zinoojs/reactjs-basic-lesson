import React from "react";
import { useState } from "react";

const UserLogin = () => {
	const [login, setLogin] = useState(false);
	let name = "bobo";
	let bol = !login;
	return (
		<div>
			{login === true ? `welcome ${name}` : "welcome guest"}
			<button onClick={() => setLogin(bol)}>
				{bol ? "login" : "logout"}
			</button>
		</div>
	);
};

export default UserLogin;
