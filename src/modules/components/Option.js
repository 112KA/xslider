import {BaseTransition} from '../transitions/BaseTransition'


export const Option = {
		
	//default value
	selector : "#xslider",
	initialSlideIndex : 0,
	autoplay : false,
	loop : true,
	touchMove : {
		throwable : true
	},
	renderer : undefined,
	debug : false,
	
	getTransition : function() {
		return BaseTransition;
	},

	get : function(property, module) {
		if(module) {
			if(!this[module]) {
				return undefined;
			}
			else {
				return this[module][property];
			}
		}
		else {
			return this[property];
		}
	}
}