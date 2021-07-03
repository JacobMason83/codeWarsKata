// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// ie highAndLow("1 2 3 4 5");  // return "5 1"

function highAndLow(numbers){
    // split the array of numbers by the space
    const numberArray =  numbers.split(" ")
    // sort the list 
    const sortedNumber = numberArray.sort((a,b) => a - b)
    // created an array to push the highest and lowest values into it 
    const highestAndLowest = []
    highestAndLowest.push(sortedNumber[sortedNumber.length -1 ])
    highestAndLowest.push(sortedNumber[0])
  // joined the array by spaces to get the highest and lowest values 
    return  highestAndLowest.join(' ')
  }