var server = require('./index.js');
const request = require('supertest');
const os = require('os');

describe("test the getUsername endpoint", () => {

	afterAll(done => {
		server.close(done);
	});

	test('getUsername is successful', done => {
		function onReceiveResponse(response) {
			expect(response.statusCode).toBe(200);
			done();
		}
		request(server).get('/api/getUsername').then(onReceiveResponse);
	});

    test('getUsername returns correct username', done => {
		function onReceiveResponse(response) {
			expect(response.body.username).toBe(os.userInfo().username);
			done();
		}
		request(server).get('/api/getUsername').then(onReceiveResponse);
	});

});
