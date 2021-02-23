function Stack() {
  this.storage = {};
  this.top = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top += 1;
  return this.size();
}

Stack.prototype.pop = function() {
  this.top -= 1;
  const value = this.storage[this.top]
  delete this.storage[this.top];
  return value;
}

Stack.prototype.size = function() {
  return this.top;
}


module.exports = Stack;