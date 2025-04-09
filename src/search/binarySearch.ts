// when the list is sorted

function search(array: number[], needle: number): boolean {
    let low = 0;
    let high = array.length - 1;

    return binarySearch(array, needle, low, high);
}

function binarySearch(
    array: number[],
    needle: number,
    low: number,
    high: number
): boolean {
    if (low === high) {
        return false;
    }
    const i = Math.floor(low + (high - low) / 2);

    if (array[i] === needle) {
        return true;
    }

    if (array[i] > needle) {
        return binarySearch(array, needle, low, i);
    } else {
        return binarySearch(array, needle, i, high);
    }
}

console.log(search([1, 2, 3, 4, 5], 3));
console.log(search([1, 2, 3, 4, 5], 10));
