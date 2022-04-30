import React from "react";
import styles from "./Style.css";

const Stylesheet = ({ primary }) => {
	return (
		<div className={`primary ? "primary" : "secondary" center bgColor`}>
			<h1>Hello React CSS</h1>
		</div>
	);
};

export default Stylesheet;
