import { Inliner } from './Inliner';

/**
 * It's based on {@link https://github.com/tsayen/dom-to-image dom-to-image by Anatolii Saienko}.
 */
export const converter = {
  parser: new DOMParser(),

  convert(node, width, height) {
    /*
		const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" width="`+width+`" height="`+height+`">
	<foreignObject x="0" y="0" width="100%" height="100%">
		<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;">
			<style>`+Inliner.inlinedFontString+`</style>
		</body>
	</foreignObject>
</svg>
		`
		// console.log('--')
		// console.log(Inliner.inlinedFontString)
		const svg = this.parser.parseFromString(svgString, "text/xml");
		let o = svg.getElementsByTagName('body')[0];
		o.appendChild(node);
*/
    node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');

    const svgString =
      `<svg xmlns="http://www.w3.org/2000/svg" width="` +
      width +
      `" height="` +
      height +
      `">
		<foreignObject x="0" y="0" width="100%" height="100%">
		</foreignObject>
		</svg>`;

    const svg = this.parser.parseFromString(svgString, 'text/xml'),
      styleNode = document.createElement('style');

    styleNode.appendChild(document.createTextNode(Inliner.inlinedFontString));
    node.appendChild(styleNode);

    let o = svg.getElementsByTagName('foreignObject')[0];
    o.appendChild(node);

    // console.log('svg: ', svg.childNodes[0]);

    return svg;
  },
};
