export const pipe = (...fns) => initInput => fns.reduce((input, fn) => fn(input), initInput);

export const curry = (fn, arr = []) => (...args) =>
	(innerArgs =>
		innerArgs.length === fn.length ? fn(...innerArgs) : curry(fn, innerArgs)
	)([...arr, ...args]);

export const trampoline = fn => {
	return function (...args) {
		let res = fn.apply(this, args);

		while(res && res instanceof Function){
			res = res();
		}

		return res;
	};
};

/**
 *
 * @param gen {GeneratorFunction}
 */
export const doNotation = gen => {
	const doing = gen();

	const _doRecur = trampoline(function doRecur(v){
		const {value, done} = doing.next(v);

		return done ? value : () => value.flatMap(doRecur);
	});

	return _doRecur();
};
