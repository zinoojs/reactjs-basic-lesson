import React from "react";

const Hoc = (OriginalCom, increseNum) => {
	class Hoc extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}

		clickHandler = () => {
			this.setState((prev) => {
				return { count: prev.count + increseNum };
			});
		};
		render() {
			// console.log(this.props);
			return (
				<OriginalCom
					name='zinoo'
					value={this.state.count}
					btn={this.clickHandler}
					{...this.props}
				/>
			);
		}
	}
	return Hoc;
};

export default Hoc;
