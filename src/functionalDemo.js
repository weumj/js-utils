import {forComprehension} from "./functional";


class Maybe {
	static _empty(val) {
		return val === null || val === undefined;
	}

	static of(val) {
		return new Maybe(val);
	}

	constructor(val) {
		this._val = val;
	}

	map(fn) {
		return Maybe._empty(this._val) ? this : Maybe.of(fn(this._val));
	}

	flatMap(fn) {
		return Maybe._empty(this._val)? this._val : fn(this._val);
	}
}

const resultM1 = forComprehension(function* () {
	const a = yield Maybe.of(1);
	const b = yield Maybe.of(3);

	return a + b;
}, Maybe);

const resultM2 = forComprehension(function* () {
	const a = yield Maybe.of(1);
	const b = yield Maybe.of(null);
	const c = yield Maybe.of(2);

	return a + c;
}, Maybe);