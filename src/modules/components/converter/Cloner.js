

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
							// clone.appendChild(childClone);
							this.insertChildAtIndex(clone, childClone, i);
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

	insertChildAtIndex(parent, child, index) {
		if(!index) index = 0;
		if(index >= parent.childNodes.length) {
			parent.appendChild(child);
		}
		else {
			parent.insertBefore(child, parent.childNodes[index]);
		}
	}

	cloneStyle(original, target, excludes) {

		if(!(original instanceof Element)) return target;

		console.log('original', original);
		console.log('target', target);
		console.log('target.style', target.style);
		
		this.copyStyle(window.getComputedStyle(original), target.style, excludes);

        if (original.hasChildNodes()) {
			console.log('original.childNodes', original.childNodes);
			console.log('target.childNodes', target.childNodes);

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