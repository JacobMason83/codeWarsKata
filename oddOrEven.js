// This function is to return a summed array and determine if its odd or even 
// if the array is [] then consider it 0 and it will be even. 
function oddOrEven(array) {
    if(array === []){
      array.push(0)
      return 'even'
    } else {
  //   create a reducer arrow function to allow it to be reduced 
      const reducer = (accumulator, currentValue)  => accumulator + currentValue
     // given the array first need to sum the array with reduce
      const arrayTotal = array.reduce(reducer, 0)
      console.log(arrayTotal)
  //   then if else statement to find if its odd or even
    if(arrayTotal % 2 === 0){
      return 'even'
    } else {
      return 'odd'
    }
   }
  }