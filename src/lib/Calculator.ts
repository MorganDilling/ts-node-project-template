import Stack from './Stack';

export default class ReversePolishNotationCalculator {
  private expression: string[];
  constructor(expression: string) {
    this.expression = expression.split(' ').join('').split('');
  }

  private areTokensLeft() {
    return this.expression.length > 0;
  }

  public evaluate(): number | undefined {
    const stack = new Stack<number>();

    while (this.areTokensLeft()) {
      const token = this.expression.shift() as string;

      const isOperator = ['+', '-', '*', '/'].includes(token);

      if (isOperator) {
        const right = stack.pop();
        const left = stack.pop();

        if (right === undefined || left === undefined) {
          throw new Error('Invalid expression');
        }

        switch (token) {
          case '+':
            stack.push(left + right);
            break;
          case '-':
            stack.push(left - right);
            break;
          case '*':
            stack.push(left * right);
            break;
          case '/':
            stack.push(left / right);
            break;
        }
      } else {
        stack.push(parseInt(token));
      }
    }

    return stack.pop();
  }
}
