import React, { Component, PropTypes } from 'react'
import "./style/Grid.scss"

class Grid extends Component {
	render() {
		const { number } = this.props;

		return (
			<span id="grid">{ number }</span>
		)

	}
}

Grid.PropTypes = {
	number: PropTypes.number.isRequired
}

export default Grid