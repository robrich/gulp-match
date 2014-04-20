/*global describe:false, it:false */

'use strict';

var gulpmatch = require('../');
var should = require('should');

describe('gulp-match', function() {
	describe('when not given a file,', function() {
		it('should throw', function() {
			// arrange
			var actualErr;

			// act
			try {
				gulpmatch();
			} catch (err) {
				actualErr = err;
			}

			// assert
			should.exist(actualErr);
			actualErr.message.indexOf('file').should.be.above(-1);
			actualErr.message.indexOf('require').should.be.above(-1);
		});
	});
});
