export default
const Maybe = (() => {
	class Nothing {
		static of() {
			return new Nothing();
		}

		map() {
			return this;
		}

		flatMap() {
			return this;
		}

		orElse(defaultVal) {
			return defaultVal;
		}

		ap() {
			return this;
		}

		toString() {
			return "Nothing";
		}
	}


	class Just {
		static of(val) {
			return new Just(val);
		}

		constructor(val) {
			this._val = val;
		}

		map(fn) {
			return Maybe.of(fn(this._val));
		}

		flatMap(fn) {
			return fn(this._val);
		}

		ap(m) {
			return m.map(this._val);
		}

		orElse() {
			return this._val;
		}

		toString() {
			return `Some(${this._val})`;
		}
	}

	return {
		of: val => val === null || val === undefined ? Nothing.of() : Just.of(val)
	}
})();
