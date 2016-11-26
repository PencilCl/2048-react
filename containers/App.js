import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import NewGame from '../components/NewGame'
import * as Actions from '../actions'

class App extends Component {
	render() {
		return (
			<div style="text-align: center;">
				<h2>2048</h2>
				<NewGame />
				<Game />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		game: state.game,
		newGame: state.newGame
	}
}

export default connect(
	mapStateToProps,
	Actions
)(App)