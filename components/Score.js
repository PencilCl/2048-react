import React, { Component, PropTypes } from 'react'
import './style/Score.scss';

class Score extends Component {
	render() {
		const { score } = this.props;

		return (
			<h3>Score: <span id="score">{ score }</span></h3>	
		)
	}
}

Score.PropTypes = {
	score: PropTypes.number.isRequired
}

export default Score