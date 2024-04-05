const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumers.map( (num) => { return num + 10});
console.log(newNums);

newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)  // every num in 2nd map will be of new data formed after 1st map
                .filter( (num) => num >= 40) // this will take

console.log(newNums);