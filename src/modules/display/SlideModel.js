
import {EventDispatcher} from '../core/EventDispatcher'
import {BaseTransition} from '../transitions/BaseTransition'


export class SlideModel extends EventDispatcher {

	constructor() {

		super();

		this._defineHandlers();

		this.width = this.height = 1;
	}

	_defineHandlers() {
		this._onChangeSlide = (e) => {

			if(e.value0 !== undefined) {
				e.value0.container.classList.remove("xslider-slide-active");
			}

			switch(e.type) {
				case 'slide0':
					this.updateSlide(0);
					break;
				case 'slide1':
					this.updateSlide(1);
					break;
			}
		}
	}

	setup(mesh) {
		this.mesh = mesh;
		this.geometry = this.mesh.geometry;
		this.material = this.mesh.material;
		this.uniforms = this.material.uniforms;

		this.on('slide0', this._onChangeSlide);
		this.on('slide1', this._onChangeSlide);
	}

	dispose() {
		this.off('slide0', this._onChangeSlide);
		this.off('slide1', this._onChangeSlide);
	}

	resize(w, h) {
		this.width = w; this.height = h;

		this.mesh.scale.set(w, h, 1);
		this.uniforms.resolution.value.set(w,h);

		this.updateSlide(0);
		this.updateSlide(1);
	}

	updateSlide(slideIndex) {
		const slide = this.get('slide'+slideIndex);

		if(!slide)  return;

		slide.resize(this.width, this.height)
			.then(() => {
				const texture = this.uniforms['texture'+slideIndex].value;

				texture.image = slide.canvas;
				texture.needsUpdate = true;

				this.dispatch('updateTexture');
			});

	}

}