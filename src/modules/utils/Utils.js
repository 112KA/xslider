export const Utils = {

	extend(base, o) {
		const ret = {};
		Object.assign(ret, base);

		const entries = Object.entries(o);
		for(let entry of entries) {
			ret[entry[0]] = entry[1];
		}

		return ret;
	},

	clamp(v, min, max) {
		return Math.max(min,Math.min(max,v));
	},

	loadImage(image, src) {
		return new Promise((resolve, reject) => {

			const check = () => {
				if(!image.complete) {
					setTimeout(check, 10);
				}
				else {
					resolve();
				}
			}

			image.src = src;

			check();
		})
	},

	toSvg(dom) {

		return new Promise((resolve, reject) => {

			domtoimage.toSvg(dom)
				.then((uri) => {
					// console.log('uri: ', uri);
					const svgString = uri.replace("data:image/svg+xml;charset=utf-8,","");

					const parser = new DOMParser();
					const svg = parser.parseFromString(svgString, "image/svg+xml");

					resolve(svg);
				});
		});
	}
}