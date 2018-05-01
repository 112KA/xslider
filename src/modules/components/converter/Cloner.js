

class Cloner {
	constructor() {

	}

	copyStyle(original, target, excludes) {

		let o = {};
		
		if(excludes && excludes.length > 0) {
			for(let i=0; i<excludes.length; i++) {
				let name = excludes[i];
				o[name] = target.getPropertyValue(name);
			}
		}

		if(original.cssText) {
			target.cssText = original.cssText;
		}
		else {
			for(let i=0; i<original.length; i++) {
				let name = original[i];
				target.setProperty(name, original.getPropertyValue(name), original.getPropertyPriority(name));
			}
		}

		Object.getOwnPropertyNames(o).forEach((name) => {
			target.setProperty(name, o[name]);
		});
	}

	cloneNode(original) {
		const clone = original.cloneNode(false);

        return new Promise((resolve, reject) => {
        	if (original.hasChildNodes()) {
				const children = original.childNodes;
				
				this.copyStyle(window.getComputedStyle(original), clone.style);

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

	cloneStyle(original, target, excludes) {

		if(!(original instanceof Element)) return target;
		
		this.copyStyle(window.getComputedStyle(original), target.style, excludes);

        if (original.hasChildNodes()) {

        	const children = original.childNodes;
        	children.forEach((child, i, list) => {
        		this.cloneStyle(child, target.childNodes[i], excludes);
        	});
        }
        else {
			return target;
        }
	}
}

export const cloner = new Cloner();