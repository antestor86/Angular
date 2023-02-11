function getPairs(arr) {
    let pairs = [];
    for (let i of arr) {
        if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
            pairs.push(i)
        }
    }
    return pairs
}



let a = [1, 1, 2, 3, 2]
let result = getPairs(a);
console.log(result)
