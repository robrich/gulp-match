/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
require('should');
require('mocha');

describe('gulp-match', function() {
	describe('when given a regex,', function() {
		it('should return true when regex matches', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var regex = /fake\/path\.js/;
			var expected = true;

			// act
			var actual = gulpmatch(file, regex);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when regex doesn\'t match', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var regex = /not\-a\/match\.js/;
			var expected = false;

			// act
			var actual = gulpmatch(file, regex);

			// assert
			actual.should.equal(expected);
		});
	});
});
