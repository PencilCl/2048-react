import React, { Component, PropTypes } from 'react'
import Grid from './Grid'
import Score from './Score'
import './style/Game.scss'

class Game extends Component {

	sliceGrid(grids) {
		let rows = [];

		for (var i = 0; i < 4; i++) {
			let row = [];
			for (var j = 0; j < 4; j++) {
				row.push(grids[i * 4 + j]);
			}
			rows.push(row);
		}

		return rows;
	}

	render() {
		const { slideLeft, slideRight, slideUp, slideDown, grids } = this.props;
		
		let rows = this.sliceGrid(grids);

		return (
			<div>
				<Score score="2048" />
				<div id="game">
					{rows.map((row) => <div className="row">{row.map((grid) => <Grid number={grid} />)}</div>)}
				</div>
			</div>
		)
	}
}

Game.PropTypes = {
	slideLeft: PropTypes.func.isRequired,
	slideDown: PropTypes.func.isRequired,
	slideUp: PropTypes.func.isRequired,
	slideRight: PropTypes.func.isRequired,
	grids: PropTypes.array.isRequired
}

export default Game