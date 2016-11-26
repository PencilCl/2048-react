import React, { Component, PropTypes } from 'react'
import Grid from './Grid'

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
		
		let rows = sliceGrid(grids);

		return (
			<div id="game">
				{rows.map((row) => <div class="row">{row.map((grid) => <Grid number={grid} />)}</div>)}
			</div>
		)
	}
}

Game.PropTypes = {
	slideLeft: PropTypes.func.isRequired,
	slideDown: PropTypes.func.isRequired,
	slideUp: PropTypes.func.isRequired,
	slideRight: PropTypes.func.isRequired,
	grids: PropTypes.Array.isRequired
}

export default Game