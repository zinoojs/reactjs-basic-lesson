import React from "react";
import { UserConsumer } from "./userContext";

const CompoC = () => {
	return (
		<UserConsumer>
			{(name) => {
				return <p>{name}</p>;
			}}
		</UserConsumer>
	);
};

export default CompoC;
