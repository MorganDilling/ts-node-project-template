import Stack from './Stack';

class DummyStack<T> extends Stack<T> {
  public items: T[] = [];
}

describe('Stack', () => {
  it('should push items', () => {
    const stack = new DummyStack<number>();
    stack.push(1);

    expect(stack.items).toEqual([1]);
  });

  it('should pop items', () => {
    const stack = new DummyStack<number>();
    stack.items = [1, 2, 3];

    expect(stack.pop()).toBe(3);
    expect(stack.items).toEqual([1, 2]);
  });

  it('should peek items', () => {
    const stack = new DummyStack<number>();
    stack.items = [1, 2, 3];

    expect(stack.peek()).toBe(3);
  });

  it('should check if it is empty', () => {
    const stack = new DummyStack<number>();

    expect(stack.isEmpty()).toBe(true);

    stack.items = [1, 2, 3];

    expect(stack.isEmpty()).toBe(false);
  });
});
