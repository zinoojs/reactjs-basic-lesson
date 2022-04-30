import React from "react";
const Inlinecss = () => {
	const heading = {
		fontSize: "22px",
		color: "skyblue",
		padding: "30px",
		background: "pink",
	};
	return (
		<div style={heading}>
			<h2
				style={{
					textAlign: "center",
					color: "black",
					textTransform: "capitalize",
				}}
			>
				radial-gradient
			</h2>
		</div>
	);
};

export default Inlinecss;
