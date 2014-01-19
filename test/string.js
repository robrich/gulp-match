/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
require('should');
require('mocha');

describe('gulp-match', function() {
	describe('when given a string,', function() {
		it('should return true when minimatch matches', function() {
			// arrange
			var fakePath = 'fake/path.js';
			var file = getFakeFile(fakePath);
			var expected = true;

			// act
			var actual = gulpmatch(file, fakePath);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when passed false', function() {
			// arrange
			var fakePath = 'fake/path.js';
			var file = getFakeFile('not-fake/path-here.js');
			var expected = false;

			// act
			var actual = gulpmatch(file, fakePath);

			// assert
			actual.should.equal(expected);
		});
	});
});
