const { initialize } = require('./server');

describe('server compiles', () => {
  it('compiles', async () => {
    expect.assertions(1);

    const app = initialize();

    expect(app).not.toBeNull();
  });
});
