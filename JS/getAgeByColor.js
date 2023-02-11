function getAvgAgeByColor(arr, hairColor) {
    let filteredArray = arr.filter(function(obj) {
        return obj.hairColor === hairColor
    })

    let totalAge = filteredArray.reduce(function(aggr, obj) {
        return aggr + obj.age
    }, 0)

    return totalAge / filteredArray.length;

}

let peoples = [
    { name: "joe", age: 13, hairColor: "red" },
    { name: "ann", age: 18, hairColor: "brown" },
    { name: "jane", age: 23, hairColor: "red" },
    { name: "john", age: 50, hairColor: "brown" },
]

let res = getAvgAgeByColor(peoples, "red");

console.log(res)
