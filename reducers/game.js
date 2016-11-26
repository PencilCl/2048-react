import { SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN, NEW_GAME } from '../actions/actionTypes'

/**
 * 深度拷贝state 有时间再改成immutable
 * @param  {array} state 要拷贝的state
 * @return {array}       拷贝后的state
 */
function deepClone(state) {
	let newState = {
		grids: [],
		score: state.score
	};
	
	for (var i = 0; i < state.grids.length; i++) {
		newState.grids.push(state.grids[i]);
	}
	return newState;
}

/**
 * 将某个格子向某个方向合并(消除)
 * @param  {int} pos    当前位置
 * @param  {int} finalPos 最终位置
 * @param  {int} add    每次移动位置 +1 -1 +4 或 -4
 * @return {int}        返回获得分数
 */
function merge(pos, finalPos, add, grids) {
	let mergeScore = 0;
	if (grids[pos] === 0) {
		// 当前位置不存在格子
		return 0;
	}
	if (grids[pos + add] === 0) {
		// 下一个位置不存在格子, 将当前格子移动到下一个位置
		grids[pos + add] = grids[pos];
		grids[pos] = 0;
	} else if (grids[pos] === grids[pos + add]) {
		// 相同则合并
		grids[pos + add] += grids[pos];
		grids[pos] = 0;
		mergeScore = grids[pos + add];
	} else if (grids[pos] !== grids[pos + add]) {
		// 不相同或到达最终位置返回
		return mergeScore;
	}

	if (pos + add === finalPos) {
		return mergeScore;
	}
	return mergeScore + merge(pos + add, finalPos, add, grids);
}

/**
 * 向所有格子中为空的格子中随机插入一个格子
 * @param {array} grids 所有格子
 */
function addNewGrid(grids) {
	let tmp = [];
	grids.map((val, id) => {
		if (val === 0) {
			tmp.push(id);
		}
	});
	let length = tmp.length;
	let pos = Math.floor(Math.random() * length);
	grids[tmp[pos]] = getTowOrFour();
}

function slideLeft(state) {
	let newState = deepClone(state),
			grids = newState.grids;
	let getScore = 0;
	for (var i = 0; i < 4; ++i) {
		for (var j = 1; j < 4; ++j) {
			getScore += merge(j + i * 4, i * 4, -1, grids);
		}
	}
	newState.score += getScore;
	addNewGrid(newState.grids);
	return newState;
}

function slideRight(state) {
	let newState = deepClone(state),
			grids = newState.grids;
	let getScore = 0;
	for (var i = 0; i < 4; ++i) {
		for (var j = 1; j < 4; ++j) {
			getScore += merge(i * 4 + 3 - j, i * 4 + 3, 1, grids);
		}
	}
	newState.score += getScore;
	addNewGrid(newState.grids);
	return newState;
}

function slideUp(state) {
	let newState = deepClone(state),
			grids = newState.grids;
	let getScore = 0;
	for (var i = 0; i < 4; ++i) {
		for (var j = 1; j < 4; ++j) {
			getScore += merge(i + j * 4, i, -4, grids);
		}
	}
	newState.score += getScore;
	addNewGrid(newState.grids);
	return newState;
}

function slideDown(state) {
	let newState = deepClone(state),
			grids = newState.grids;
	let getScore = 0;
	for (var i = 0; i < 4; ++i) {
		for (var j = 1; j < 4; ++j) {
			getScore += merge((3 - j) * 4 + i, 12 + i, 4, grids);
		}
	}
	newState.score += getScore;
	addNewGrid(newState.grids);
	return newState;
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

function getTowOrFour() {
	return (Math.random() - 0.1 > 0) ? 2 : 4;
}

function initialState() {
	return {
		'grids': shuffle(repeat(1, getTowOrFour()).concat(repeat(1, getTowOrFour())).concat(repeat(14, 0))),
		'score': 0
	}
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