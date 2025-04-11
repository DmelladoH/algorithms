// O(n^2)

function bubbleSort(array: number[]): void {
  let len = array.length;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      const curr = array[i];
      const next = array[i + 1];
      console.log(curr, next);
      if (curr > next) {
        const bubble = array[i];
        array[i] = array[i + 1];
        array[i + 1] = bubble;
      }
    }
    len -= 1;
  }
}

const foo = [3, 2, 1, 4, 5];
bubbleSort(foo);
console.log(foo);
