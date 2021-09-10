const express = require('express');
const request = require('supertest');
const healthRouter = require('./health');

const app = express()
  .use(healthRouter);

/* eslint-disable jest/prefer-expect-assertions */

describe('healthRouter', () => {
  it('responds with ok', async () => {
    await new Promise((resolve, reject) => {
      request(app)
        .get('/')
        .expect(200, { success: true, message: 'Hi mom 👋' })
        .end((err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
    });
  });
});
