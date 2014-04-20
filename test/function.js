/*global describe:false, it:false */

'use strict';

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
require('should');

describe('gulp-match', function() {
	describe('when given a function,', function() {
		it('should return true when function returns true', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = true;
			var fn = function () {
				return true;
			};

			// act
			var actual = gulpmatch(file, fn);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when function returns false', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = false;
			var fn = function () {
				return false;
			};

			// act
			var actual = gulpmatch(file, fn);

			// assert
			actual.should.equal(expected);
		});
	});
});
