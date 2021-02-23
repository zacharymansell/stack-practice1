const Stack = require('./Stack');
const stack = new Stack();

describe('Stack', () => {
  it('has a push, pop, and size methods', () => {
    expect(typeof Stack.prototype.push).toBe('function');
    expect(typeof Stack.prototype.pop).toBe('function');
    expect(typeof Stack.prototype.size).toBe('function');
  })

  test('the push method will return the number 1', () => {
    expect(stack.push('hello')).toEqual(1)

    expect(stack.push('world')).toEqual(2)
  })

  test('pop returns the value in storage, removes it from storage, and updates size', () => {
    expect(stack.pop()).toEqual('world')
    expect(stack.storage['1']).toBeUndefined();
    expect(stack.size()).toEqual(1)
  })
})