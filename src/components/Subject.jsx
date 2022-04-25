import React from "react";

const Subject = ({ sub }) => {
	return (
		<div>
			<p>
				{sub.name} is developed by {sub.inventor} in {sub.year}
			</p>
		</div>
	);
};

export default Subject;
