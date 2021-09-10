const express = require('express');
const request = require('supertest');
const asyncMiddleware = require('./asyncMiddleware');
const errorMiddleware = require('./errorMiddleware');

jest.spyOn(console, 'error').mockImplementation();
const throwRouter = new express.Router();

// When express falls through to the error middleware, it calls setImmediate.
// This will cause jest to fail - instead we'll just replace it so that it no
// longer fails.
if (window.setImmediate == null) {
  window.setImmediate = (done, value) => done(value);
}

throwRouter.get('/throwsError', asyncMiddleware(() => {
  throw new Error('something bad happened!');
}));

describe('errorMiddleware', () => {
  const app = express()
    .use(throwRouter)
    .use(errorMiddleware);

  it('throws an error', async () => {
    await new Promise((resolve, reject) => {
      request(app)
        .get('/throwsError')
        .expect(500)
        .end((err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
    });
  });
});
