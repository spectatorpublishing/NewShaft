var app = require('./index.js');
const request = require('supertest');

describe("test the getUsername endpoint", () => {
    test('getUsername returns a string', () => {
        request(app).get('/api/getUsername').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
