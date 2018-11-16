var app = require('./index.js');
const request = require('supertest');
const os = require('os');

describe("test the getUsername endpoint", () => {
    test('getUsername is successful', () => {
        request(app).get('/api/getUsername').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('getUsername returns correct username', () => {
        request(app).get('/api/getUsername').then((response) => {
            console.log(response.body.username);
            expect(response.body.username).toBe(os.userInfo().username);
            done();
        });
    })
});
