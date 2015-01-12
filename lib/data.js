
'use strict';

var through2 = require('through2'),
	File = require('vinyl');

function dataToVinyl(url) {
	if (typeof url !== 'string') {
		throw new TypeError();
	}

	var parts = url.match(/^data:([^;]+)(;([^;]+))*,(.*)/);

	if (!parts) {
		throw new TypeError('Invalid data URI.');
	}

	var file = new File({
		contents: new Buffer(parts[4], parts[3])
	});
	file.contentType = parts[1];
	var res = through2.obj();
	res.push(file);
	return res;
}

module.exports = {
	src: dataToVinyl
};
