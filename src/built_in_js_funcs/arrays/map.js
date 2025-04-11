Array.prototype.map = function (callbackFn, thisArg) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callbackFn.call(thisArg, this[i], i, this));
  }
  return res;
};

const foo = [1, 2, 3, 4];
const bar = foo.map((elem) => elem * 2);
console.log(bar);
