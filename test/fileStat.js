/*jshint node:true */
/*global describe:false, it:false */

"use strict";

var gulpmatch = require('../');
require('should');
require('mocha');

describe('gulp-match', function() {
	describe('when given a file stat object,', function() {

		var getFakeFile = function (path, isFile, isDirectory) {
			return {
				path: path,
				stat: {
					isFile: function () {
						return isFile;
					},
					isDirectory: function () {
						return isDirectory;
					}
				}
			};
		};

		it('should return true when isFile matches', function() {
			// arrange
			var isFile = true;
			var isDirectory = false;
			var file = getFakeFile('not-fake/path-here.js', isFile, isDirectory);
			var expected = true;

			// act
			var actual = gulpmatch(file, {isFile:true});

			// assert
			actual.should.equal(expected);
		});

		it('should return false when isFile doesn\'t match', function() {
			// arrange
			var isFile = true;
			var isDirectory = false;
			var file = getFakeFile('not-fake/path-here.js', isFile, isDirectory);
			var expected = false;

			// act
			var actual = gulpmatch(file, {isFile:false});

			// assert
			actual.should.equal(expected);
		});

		it('should return true when isDirectory matches', function() {
			// arrange
			var isFile = false;
			var isDirectory = true;
			var file = getFakeFile('not-fake/path-here.js', isFile, isDirectory);
			var expected = true;

			// act
			var actual = gulpmatch(file, {isDirectory: true});

			// assert
			actual.should.equal(expected);
		});

		it('should return false when isDirectory doesn\'t match', function() {
			// arrange
			var isFile = false;
			var isDirectory = true;
			var file = getFakeFile('not-fake/path-here.js', isFile, isDirectory);
			var expected = false;

			// act
			var actual = gulpmatch(file, {isDirectory: false});

			// assert
			actual.should.equal(expected);
		});

		it('should return false when file has no stat', function() {
			// arrange
			var fakePath = 'fake/path.js';
			var file = {
				path: fakePath
				// no stat
			};
			var expected = false;

			// act
			var actual = gulpmatch(file, {isFile: true});

			// assert
			actual.should.equal(expected);
		});
	});
});
