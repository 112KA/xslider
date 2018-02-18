import {BaseTransition} from '../transitions/BaseTransition'


export const Option = {
		
	//default value
	selector : "#xslider",
	initialSlideIndex : 0,
	autoplay : false,
	renderer : undefined,
	debug : false,
	getTransition : function() {
		return BaseTransition;
	}
}