Array.prototype.indexOf = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

console.log([1, 2, 3, 5].indexOf(2, 3));
