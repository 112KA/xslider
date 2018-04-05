

class Cloner {
	constructor() {

	}

	cloneNode(original) {
		const clone = original.cloneNode(false);

        return new Promise((resolve, reject) => {
        	if (original.hasChildNodes()) {
        		const children = original.childNodes;

		        const style = window.getComputedStyle(original);
		        clone.style.cssText = style.cssText;

        		const arr = [];

		        children.forEach((child, i, list) => {
		        	let p = this.cloneNode(child)
		        		.then((childClone) => {
		        			clone.appendChild(childClone);
		        		});
		        	arr.push(p);
		    	});

		    	Promise.all(arr).then(()=> {
		    		resolve(clone);
		    	});
        	}
        	else {
        		resolve(clone);
		    }
        })
	}

	copyStyleExcludeBackground(original, target) {

        if(!(original instanceof Element)) return target;

		const style = window.getComputedStyle(original);
		const background = target.style.getPropertyValue('background');
		target.style.cssText = style.cssText;

		if(background) {
            target.style.setProperty('background', background);
		}

        if (original.hasChildNodes()) {

        	const children = original.childNodes;
        	children.forEach((child, i, list) => {
        		this.copyStyleExcludeBackground(child, target.childNodes[i]);
        	});
        }
        else {
			return target;
        }
	}
}

export const cloner = new Cloner();