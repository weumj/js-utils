import {forComprehension} from "./functional";


class Maybe {
	static of(val) {
		return new Maybe(val);
	}

	constructor(val) {
		this._val = val;
	}

	isNothing() {
		return this._val === null || this._val === undefined;
	}

	map(fn) {
		return this.isNothing() ? this : Maybe.of(fn(this._val));
	}

	flatMap(fn) {
		return this.isNothing() ? this : fn(this._val);
	}

	orElse(defaultVal) {
		return this.isNothing() ? defaultVal : this._val;
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