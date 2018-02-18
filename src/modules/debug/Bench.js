export class Bench {
	static start(tag, label) {
		const _label = label != undefined ? "start-"+label : "start";
		console.log(tag, _label);
		Bench.list[tag] = Bench.time;
	}

	static check(tag, label) {
		const _label = label != undefined ? "check-"+label : "check";
		const dt = Bench.time - Bench.list[tag];
		console.log(tag, _label, dt);
	}

	static end(tag, label) {
		const _label = label != undefined ? "end-"+label : "end";
		const dt = Bench.time - Bench.list[tag];
		console.log(tag, _label, dt);
		delete Bench.list[tag];
	}

	static get time() {
		return Date.now() || new Date().getTime();
	}
}

Bench.list = {}