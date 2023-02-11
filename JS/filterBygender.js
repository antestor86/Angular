cdfunction filterValues(arr) {
    let femaleList = arr.map(item => {
        item.firstname = item.fn
        delete item.fn
        item.lastname
        delete item.ln
        return item

    }).filter(item => {
        return item.gender === 'female'
    })


    return femaleList


}


let obj = [
    { fn: "Joe", ln: "Mikaelyan", gender: "male" },
    { fn: "Jane", ln: "Orando", gender: "female" },
    { fn: "Ann", ln: "Orando", gender: "female" }
]

let res = filterValues(obj);
console.log(res)
