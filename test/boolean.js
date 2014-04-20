/*global describe:false, it:false */

'use strict';

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
require('should');

describe('gulp-match', function() {
	describe('when given a boolean value,', function() {
		it('should return true when passed true', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = true;

			// act
			var actual = gulpmatch(file, expected);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when passed false', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = false;

			// act
			var actual = gulpmatch(file, expected);

			// assert
			actual.should.equal(expected);
		});
	});
});
