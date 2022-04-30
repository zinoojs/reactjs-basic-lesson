import React from "react";
import ReactDOM from "react-dom";
const PortalDemo = () => {
	return ReactDOM.createPortal(
		<h1>Helo</h1>,
		document.querySelector("#portal-root")
	);
};

export default PortalDemo;
