/*global describe:false, it:false */

'use strict';

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
require('should');

describe('gulp-match', function() {
	describe('when given a non handled value,', function() {
		it('should return true when passed truthy', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = true;
			var source = 25;

			// act
			var actual = gulpmatch(file, source);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when passed falsey', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = false;
			var source = '';

			// act
			var actual = gulpmatch(file, source);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when passed undefined', function() {
			// arrange
			var file = getFakeFile('fake/path.js');
			var expected = false;

			// act
			var actual = gulpmatch(file);

			// assert
			actual.should.equal(expected);
		});
	});
});
