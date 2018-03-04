class Net {
	construcor() {

	}


	loadImage(image, src) {
		return new Promise((resolve, reject) => {

			const check = () => {
				if(!image.complete) {
					setTimeout(check, 10);
				}
				else {
					resolve();
				}
			}

			image.src = src;

			check();
		})
	}


	get(url, responseType) {
		return new Promise((resolve, reject) => {

                  const onChange = () => {
                  switch ( xhr.readyState ) {
                  	case 4:
                  	// console.log('xhr: ', xhr);
                  		if(xhr.status == 200 || xhr.status == 304) {
                  			resolve(xhr.response);
                  		}
                  		else {
                  			reject();
                  		}
                  		break;
                  }
                  };

                  const onTimeout = () => {
                        reject();
                  };

                  const xhr = new XMLHttpRequest();
                  xhr.onreadystatechange = onChange;
                  xhr.ontimeout = onTimeout;
                  xhr.responseType = responseType;
                  xhr.timeout = 30000;
                  xhr.open('GET', url, true);
                  xhr.send(null);


		});
	}


      getDataURI(url) {
            return this.get(url, 'blob')
                  .then(this.readBlob, () => url);
      }


      readBlob(blob) {
        const reader = new FileReader();
            return new Promise((resolve, reject) => {
              reader.onloadend = function () {
                  resolve(reader.result);
              };
              reader.readAsDataURL(blob);
            });
      }
}

export const net = new Net();