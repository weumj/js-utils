import {doNotation as DO} from "./functional";

import Maybe from "./Maybe";


const resultM1 = DO(function* () {
	const a = yield Maybe.of(1);
	const b = yield Maybe.of(3);

	return Maybe.of(a + b);
}, Maybe);

const resultM2 = DO(function* () {
	const a = yield Maybe.of(1);
	const b = yield Maybe.of(null);
	const c = yield Maybe.of(2);

	return Maybe.of(a + c);
}, Maybe);