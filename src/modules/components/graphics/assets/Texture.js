import {Asset} from './Asset'

export class Texture extends Asset {
    constructor(src) {
        super();

        this.image = undefined;

        if(src) {
            this.setup(src);
        }
    }

    setup(src) {
        if(!this.image) {
            this.image = new Image();
        }
        return new Promise((resolve, reject) => {
            if(this.image.src != src) {
                this.needsUpdate = false;
                this.image.src = src;
                this.image.onload = () => {
                    this.needsUpdate = true;
                    resolve();
                }
            }
            else {
                resolve();
            }
        });
    }
}