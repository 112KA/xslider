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

	delegate(base, o) {
		const entries = Object.entries(o);
		for(let entry of entries) {
			base[entry[0]] = entry[1];
		}
	},

	clamp(v, min, max) {
		return Math.max(min,Math.min(max,v));
	},
	
	getQuery(key, cached=true) {
		
		if(!this._query || !cached) {
			this._query = {};
			//最初の?を除いた文字列を取得
			let query = window.location.search.substring(1);
			let parameters = query.split( '&' );
			for(let i = 0; i < parameters.length; i++) {
				let element = parameters[i].split("=");
				let paramName = decodeURIComponent( element[0] );
				let paramValue = decodeURIComponent( element[1] );
				this._query[paramName] = paramValue;
			}
		}
		return this._query[key];
    }

	// toSvg(dom) {



	// 	return new Promise((resolve, reject) => {

	// 		domtoimage.toSvg(dom)
	// 			.then((uri) => {
	// 				// console.log('uri: ', uri);
	// 				const svgString = uri.replace("data:image/svg+xml;charset=utf-8,","");

	// 				const parser = new DOMParser();
	// 				const svg = parser.parseFromString(svgString, "image/svg+xml");

	// 				resolve(svg);
	// 			});
	// 	});
	// }
}