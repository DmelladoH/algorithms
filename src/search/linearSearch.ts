// O(n)
// Implementation of indexOf
function linearSearch<T>(array: T[], needle: T) : boolean {
  for(let i = 0; i < array.length; i++){
    if(array[i] === needle){
      return true
    }
  }

  return false
}

