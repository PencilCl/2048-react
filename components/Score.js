import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
	score: {
		color: "red",
		fontWeight: "bold"
	}
}

class Score extends Component {
	render() {
		const { score } = this.props;

		return (
			<h3>Score: <span style={styles.score}>{ score }</span></h3>	
		)
	}
}

Score.PropTypes = {
	score: PropTypes.number.isRequired
}

export default Score