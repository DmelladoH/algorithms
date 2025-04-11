// O(n)
// Implementation of indexOf
function linearSearch<T>(array: T[], needle: T): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle) {
            return true;
        }
    }

    return false;
}

console.log(linearSearch([0, 1, 2, 3, 4], 2));
