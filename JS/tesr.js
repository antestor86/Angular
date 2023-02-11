let odd = [

    {
        name: 'Admin',
        age: 18,
    },

    {
        name: 'Hero',
        age: 28,
    },

    {
        name: 'Hopar',
        age: 38,
    },

    {
        name: 'Armen',
        age: 28,
    },

    {
        name: 'Harut',
        age: 28,
    }

]


let otherOdd = odd.filter((item) => {
    return item.name.includes('A')
})

console.log(otherOdd)