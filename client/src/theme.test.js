import theme from './theme';

describe('theme', () => {
  it('exists', () => {
    expect.assertions(1);

    expect(theme).toBeDefined();
  });

  it('has correct spacing', () => {
    expect.assertions(1);

    expect(theme.spacing(4)).toStrictEqual('1rem');
  });
});
