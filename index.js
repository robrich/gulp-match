/*jshint node:true */

"use strict";

var minimatch = require('minimatch');

module.exports = function (file, condition) {
	if (!file) {
		throw new Error('gulp-match: vinyl file required');
	}

	if (typeof condition === 'boolean') {
		return condition;
	}

	if (typeof condition === 'function') {
		return !!condition(file);
	}

	if (typeof condition === 'object' && typeof condition.test === 'function' && condition.hasOwnProperty('source')) {
		// FRAGILE: ASSUME: it's a regex
		return condition.test(file.path);
	}

	if (typeof condition === 'string') {
		// FRAGILE: ASSUME: it's a minimatch expression
		return minimatch(file.path, condition);
	}

	if (Array.isArray(condition)) {
		// FRAGILE: ASSUME: it's a minimatch expression
		if (!condition.length) {
			throw new Error('gulp-match: empty glob array');
		}
		var i = 0;
		for (i = 0; i < condition.length; i++) {
			if (minimatch(file.path, condition[i])) {
				return true;
			}
		}
		return false;
	}

	if (typeof condition === 'object') {
		if (condition.hasOwnProperty('isFile') || condition.hasOwnProperty('isDirectory')) {
			if (!file.hasOwnProperty('stat')) {
				return false; // TODO: what's a better status?
			}
			if (condition.hasOwnProperty('isFile')) {
				return (condition.isFile === file.stat.isFile());
			}
			if (condition.hasOwnProperty('isDirectory')) {
				return (condition.isDirectory === file.stat.isDirectory());
			}
		}
	}

	return !!condition;
};
