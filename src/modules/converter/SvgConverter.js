import {Inliner} from './Inliner'


export const converter = {
	parser : new DOMParser(),

	convert(node, width, height) {

		const svgString = `
		<svg xmlns="http://www.w3.org/2000/svg" width="`+width+`" height="`+height+`">
			<foreignObject x="0" y="0" width="100%" height="100%">
				<style>`+Inliner.inlinedFontString+`</style>
			</foreignObject>
		</svg>
		`
		const svg = this.parser.parseFromString(svgString, "text/xml");
		let o = svg.getElementsByTagName('foreignObject')[0];
		o.appendChild(node);

		console.log('svg: ', svg);

		return svg;
	}
}