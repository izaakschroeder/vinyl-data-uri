
'use strict';

var data = require('data');

var dot = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA' +
	'AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO' +
	'9TXL0Y4OHwAAAABJRU5ErkJggg==';

var decoded = new Buffer('iVBORw0KGgoAAAANSUhEUgAAAAUA' +
'AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO' +
'9TXL0Y4OHwAAAABJRU5ErkJggg==', 'base64');

describe('data', function() {
	describe('#src', function() {
		it('should write one file', function() {
			expect(data.src(dot).read(1))
				.to.not.be.null;
		});

		it('should fail if input not a string', function() {
			expect(data.src).to.throw(TypeError);
		});

		it('should fail on invalid uri', function() {
			expect(function() {
				data.src('data:lol');
			}).to.throw(TypeError);
		});

		it('should set the correct data', function() {
			var file = data.src(dot).read(1);
			expect(file).to.have.property('contents');
			expect(file.contents).to.deep.equal(decoded);
		});

		it('should set the correct contentType', function() {
			expect(data.src(dot).read(1))
				.to.have.property('contentType', 'image/png');
		});

	});
});
