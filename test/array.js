/*global describe:false, it:false */

'use strict';

var gulpmatch = require('../');
var getFakeFile = require('./fixtures/fakefile');
var should = require('should');

describe('gulp-match', function() {
	describe('when given an array,', function() {
		it('should return true when minimatch matches', function() {
			// arrange
			var fakePath = 'fake/path.js';
			var file = getFakeFile(fakePath);
			var expected = true;

			// act
			var actual = gulpmatch(file, [fakePath]);

			// assert
			actual.should.equal(expected);
		});

		it('should return false when no minimatch matches', function() {
			// arrange
			var fakePath = 'fake/path.js';
			var file = getFakeFile('not-fake/path-here.js');
			var expected = false;

			// act
			var actual = gulpmatch(file, [fakePath]);

			// assert
			actual.should.equal(expected);
		});

		it('should throw when passed an empty array', function() {
			// arrange
			var actualErr;
            var file = getFakeFile('not-fake/path-here.js');

			// act
			try {
				gulpmatch(file, []);
			} catch (err) {
				actualErr = err;
			}

			// assert
			should.exist(actualErr);
			actualErr.message.indexOf('array').should.be.above(-1);
			actualErr.message.indexOf('empty').should.be.above(-1);
		});

		var multiPatternTest = function (file, expected) {
			// arrange
			var pattern = ['*', '!*.json', '!*rc'];

			// act
			var actual = gulpmatch({relative:file}, pattern);

			// assert
			actual.should.equal(expected);
		};

		it('should filter files with negate pattern and leading dot', function() {
			multiPatternTest('included.js', true);
			multiPatternTest('package.json', false);
			multiPatternTest('.jshintrc', false);
			multiPatternTest('app.js', true);
		});

	});
});
