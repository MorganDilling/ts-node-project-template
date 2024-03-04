import Calculator from './Calculator';

describe('Calculator', () => {
  it('should evaluate postfix expression', () => {
    const calc = new Calculator('5 2 4 * +');
    expect(calc.evaluate()).toBe(13);
  });
});
