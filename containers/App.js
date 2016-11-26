import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import NewGame from '../components/NewGame'
import * as Actions from '../actions'

class App extends Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h2>2048</h2>
				<NewGame />
				<Game grids={this.props.game}/>
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