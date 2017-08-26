import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
	newGame: {
		backgroundColor: "#baada2",
		outline: "none",
		border: "1px solid #A49991",
		borderRadius: "3px",
	
		color: "white",
		fontWeight: "bold",
		fontSize: "16px",
		padding: "10px 20px"
	}
}

class NewGame extends Component {
	render() {
		const { newGame } = this.props;

		return (
			<button style={styles.newGame} onClick={newGame}>new game</button>
		)
	}
}

NewGame.PropTypes = {
	newGame: PropTypes.func.isRequired
}

export default NewGame