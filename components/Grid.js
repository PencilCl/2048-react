import React, { Component, PropTypes } from 'react'

const styles = {
	grid: {
		width: 100,
		height: 100,
	
		fontWeight: "bold",
		fontSize: "2.5em",
	
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5
	},
	number: {
		"0": {
			fontSize: "0px",
			backgroundColor: "#cdbfb3"
		},
		"2": {
			color: "#7b7169",
			backgroundColor: "#eee4bd"
		},
		"4": {
			color: "#7b7169",
			backgroundColor: "#d2d6da"
		},
		"8": {
			color: "white",
			backgroundColor: "#a9c8da"
		},
		"16": {
			color: "white",
			backgroundColor: "#83c8d5"
		},
		"32": {
			color: "white",
			backgroundColor: "#19A6DE"
		},
		"64": {
			color: "white",
			backgroundColor: "#5c9ade"
		},
		"128": {
			color: "white",
			backgroundColor: "#8E9BFF"
		},
		"256": {
			color: "white",
			backgroundColor: "#655BD5"
		},
		"512": {
			color: "white",
			backgroundColor: "#D49255"
		},
		"1024": {
			color: "white",
			backgroundColor: "#D371D5"
		},
		"2048": {
			color: "white",
			backgroundColor: "#D20016"
		}
	}
}

class Grid extends Component {
	render() {
		const { number } = this.props;

		return (
			<span style={{...(styles.grid), ...(styles.number[number + ""])}}>{ number }</span>
		)

	}
}

Grid.PropTypes = {
	number: PropTypes.number.isRequired
}

export default Grid