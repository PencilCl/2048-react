import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import NewGame from '../components/NewGame'
import * as Actions from '../actions/index'

class App extends Component {
	render() {
		const { slideLeft, slideRight, slideUp, slideDown, newGame, game } = this.props;
		
		return (
			<div style={{textAlign: 'center'}}>
				<h1 style={{color: '#867E77'}}>2048</h1>
				<NewGame newGame={newGame} />
				<Game slideDown={slideDown} slideUp={slideUp} slideLeft={slideLeft} slideRight={slideRight} grids={game.grids} score={game.score} />
				<p>you can slide through direction key</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		game: state.game
	}
}

export default connect(
	mapStateToProps,
	Actions
)(App)