// O(n)
// Implementation of indexOf
function linearSearch<T>(array: T[], needle: T) : number {
  for(let i = 0; i < array.length; i++){
    if(array[i] === needle){
      return i
    }
  }

  return -1
}


console.log(linearSearch([1,2,3,4], 4))
console.log(linearSearch(["a", "b", "c", "d"], "c"))
