'use strict';

var request = require('request');

describe('example9', function () {

	var restServer;

	beforeEach(function () {

		restServer = require('./server');
	});

	afterEach(function () {

		restServer.server.close();
	});

	it('can get correct value from rest server', function (done) {

		request('http://localhost:3000/', function (err, response, body) {

			expect(body).toBe('9th example!')

			done();
		});
	});

});

