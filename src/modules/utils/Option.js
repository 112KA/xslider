import {BaseTransition} from '../transitions/BaseTransition'


export const Option = {
		
	//default value
	selector : "#xslider",
	initialSlideIndex : 0,
	autoplay : false,
	loop : true,
	throwable : true,
	allowTouchMove : true,
	renderer : undefined,
	debug : false,
	
	getTransition : function() {
		return BaseTransition;
	}
}