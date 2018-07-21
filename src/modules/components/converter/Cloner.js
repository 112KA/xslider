

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

			//remove fontStrech
			const matches = target.cssText.match(/font:( [^ ;]+)+;/);
			if(matches) {
				const removeFontStrech = s => {
					let arr = s.split(" ");
					arr.splice(3, 1);
					return arr.join(" ");
				};
				for(let i=0; i<matches.length; i++) {
					target.cssText = target.cssText.replace(matches[i], removeFontStrech(matches[i]));
				}
			}
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
				
			if(!(original instanceof Element)) {
				resolve(clone);
			}
			else {
				this.copyStyle(window.getComputedStyle(original), clone.style);
	
				if (original.hasChildNodes()) {
					const children = original.childNodes;
	
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