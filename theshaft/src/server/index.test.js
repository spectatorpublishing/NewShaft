var app = require('./index.js');
const request = require('supertest');
const os = require('os');

describe("test the getUsername endpoint", () => {

    test('getUsername is successful', () => {
        expect.assertions(1);
        return request(app).get('/api/getUsername').then((response) => {
            expect(response.statusCode).resolves.toBe(200);
        });
    });

    test('getUsername returns correct username', () => {
        expect.assertions(1);
        return request(app).get('/api/getUsername').then((response) => {
            console.log(response.body.username);
            expect(response.body.username).resolves.toBe(os.userInfo().username);
        });
    });

});
