// const arr = [3, 1, 4, 1, 5, 9,9];

function secondLargestValue (arr){
    const uniqueArray = Array.from( new Set(arr))
    const sortValue = uniqueArray.sort((a, b) => b-a)
    if(sortValue.length >=2){
       return console.log( sortValue[1])
    }
    return false


}

secondLargestValue([9])