import React, { Component, PropTypes } from 'react'
import ReactGestures from 'react-gestures'
import Grid from './Grid'
import Score from './Score'
import './style/Game.scss'

class Game extends Component {

	constructor(props) {
		super(props);

		document.onkeydown = (event) => {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			const { slideUp, slideDown, slideLeft, slideRight } = this.props;
			if (e) {
				switch (e.keyCode) {
					case 38:
						slideUp();
						return true;
					case 40:
						slideDown();
						return true;
					case 37:
						slideLeft();
						return true;
					case 39:
						slideRight();
						return true;
					default:
						return true;
				}
				e.preventDefault();
			}
		}
	}

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
		const { score, grids, slideLeft, slideRight, slideUp, slideDown } = this.props;

		let rows = this.sliceGrid(grids);

		return (
			<div>
				<Score score={score} />
				<ReactGestures
					onSwipeUp={slideUp}
					onSwipeDown={slideDown}
					onSwipeLeft={slideLeft}
					onSwipeRight={slideRight}>
					<div id="game">
						{rows.map((row, key) => <div key={key} className="row">{row.map((grid, id) => <Grid key={id} number={grid} />)}</div>)}
					</div>
				</ReactGestures>
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