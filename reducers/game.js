import { SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN, NEW_GAME } = from '../actions/actionTypes'

function slideLeft(state) {
	return state;
}

function slideRight(state) {
	return state;
}

function slideUp(state) {
	return state;
}

function slideDown(state) {
	return state;
}

function shuffle(grids) {
	return grids.sort(() => Math.random() - 0.5);
}

function repeat(n, val) {
	const res = [];
	while (n--) {
		res.push(val);
	}
	return res;
}

function initialState() {
	return shuffle(repeat(2, 2).concat(repeat(14, 0)));
}

export default function game (state = initialState(), action) {
	switch (action.type) {
		case SLIDE_LEFT:
			return slideLeft(state)
		case SLIDE_RIGHT:
			return slideRight(state)
		case SLIDE_UP:
			return slideUp(state)
		case SLIDE_DOWN:
			return slideDown(state)
		case NEW_GAME:
			return initialState()
		default:
			return state
	}
}