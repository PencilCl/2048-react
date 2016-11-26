import * as types from './actionTypes'

export function slideLeft() {
	return {
		type: types.SLIDE_LEFT
	}
}

export function slideRight() {
	return {
		type: types.SLIDE_RIGHT
	}
}

export function slideUp() {
	return {
		type: types.SLIDE_UP
	}
}

export function slideDown() {
	return {
		type: types.SLIDE_DOWN
	}
}

export function newGame() {
	return {
		type: types.NEW_GAME
	}
}