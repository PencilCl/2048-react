import React, { Component, PropTypes } from 'react'

class NewGame extends Component {
	render() {
		const { newGame } = this.props;

		return (
			<button id="new-game" onClick={newGame}>new game</button>
		)
	}
}

NewGame.PropTypes = {
	newGame: PropTypes.func.isRequired
}

export default NewGame