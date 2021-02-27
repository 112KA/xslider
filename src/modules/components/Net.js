class Net {
  constructor() {
    /*
     * Only WOFF and EOT mime types for fonts are 'real'
     * see http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    var WOFF = 'application/font-woff';
    var JPEG = 'image/jpeg';

    this.mimes = {
      woff: WOFF,
      woff2: WOFF,
      ttf: 'application/font-truetype',
      eot: 'application/vnd.ms-fontobject',
      png: 'image/png',
      jpg: JPEG,
      jpeg: JPEG,
      gif: 'image/gif',
      tiff: 'image/tiff',
      svg: 'image/svg+xml',
    };
  }

  loadImage(image, src) {
    return new Promise((resolve, reject) => {
      const check = () => {
        if (!image.complete) {
          setTimeout(check, 10);
        } else {
          resolve();
        }
      };

      image.src = src;

      check();
    });
  }

  get(url, responseType) {
    return new Promise((resolve, reject) => {
      const onChange = () => {
        switch (xhr.readyState) {
          case 4:
            if (xhr.status == 200 || xhr.status == 304) {
              resolve(xhr.response);
            } else {
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

  // async getDataURI(url) {
  // 	let blob;
  // 	blob = await this.get(url, 'blob');
  // 	blob = await this.readBlob(blob);
  // 	return blob;
  // }
  getDataURI(url) {
    let ext = this.parseExtension(url);

    return this.get(url, 'blob').then(blob => {
      return this.readBlob.bind(this)(blob, ext);
    });
  }

  parseExtension(url) {
    var match = /\.([^\.\/]*?)$/g.exec(url);
    if (match) return match[1];
    else return null;
  }

  getMimeType(ext) {}

  readBlob(blob, ext) {
    const reader = new FileReader(),
      mimeType = ext ? this.mimes[ext] : null;
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        let ret = reader.result;
        if (mimeType) {
          ret = ret.split(',')[1];
          ret = 'data:' + mimeType + ';base64,' + ret;
        }
        resolve(ret);
      };
      reader.readAsDataURL(blob);
    });
  }
}

export const net = new Net();
