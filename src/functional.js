export const pipe = (...fns) => initInput => fns.reduce((input, fn) => fn(input), initInput);

export const curry = (fn, arr = []) => (...args) =>
	(innerArgs =>
		innerArgs.length === fn.length ? fn(...innerArgs) : curry(fn, innerArgs)
	)([...arr, ...args]);

/**
 *
 * @param gen {GeneratorFunction}
 */
export const forComprehension = gen => {
	const doing = gen();
	const doRecur = v => {
		const {value, done} = doing.next(v);

		return done ? value.map() : value.flatMap(doRecur);
	};

	// TODO trampoline
	return doRecur(null);
};
