let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function isOddNumber(arr) {
    return arr % 2
}

let OddNumbers = arr.filter(isOddNumber);

console.log(OddNumbers);