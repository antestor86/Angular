//Get ul  & button elements
const sortById = document.getElementById('sort-by-id');
const sortBySize = document.getElementById('sort-by-size');
const numberList = document.getElementById('number-list');

//create array from number
let numbers = [5, 3, 1, 4, 2]
let shoes = [{
        id: 19,
        name: 'Reebok',
        size: 45
    },
    {
        id: 14,
        name: 'Adidas',
        size: 41
    },
    {
        id: 10,
        name: 'Nike',
        size: 18
    },
    {
        id: 25,
        name: 'Baldi',
        size: 38
    }
]
for (let item of shoes) {
    const li = document.createElement('li');

    const div = document.createElement('div');
    const span_size = document.createElement('span');
    span_size.innerHTML = 'SIZE'
    div.setAttribute.id = item.id
    console.log(div.id)

    const h1 = document.createElement('h2');
    h1.setAttribute.id = item.name;

    const size = document.createElement('h3')
    size.setAttribute.id = item.size

    div.innerText = item.id
    h1.innerText = item.name
    size.innerHTML = item.size

    li.appendChild(div)
    li.appendChild(h1)
    li.appendChild(span_size)
    li.appendChild(size)

    // li.className = 'list_item'
    numberList.appendChild(li)
}

//Get Ul list childrens
let ul_children = numberList.children

sortById.addEventListener('click', () => {

    const sortedList = Array.from(ul_children).sort((a, b) => {

        //parseInt(a.querySelector('div').textContent) - parseInt(b.querySelector('div').textContent)

        return a.querySelector('div').textContent - b.querySelector('div').textContent

    })


    for (let i = 0; i < sortedList.length; i++) {
        console.log(sortedList[i].querySelector('div'))
        numberList.appendChild(sortedList[i])

    }
})


sortBySize.addEventListener('click', () => {

    const sortedList = Array.from(ul_children).sort((a, b) => {

        //parseInt(a.querySelector('div').textContent) - parseInt(b.querySelector('div').textContent)

        return a.querySelector('h3').textContent - b.querySelector('h3').textContent

    })


    for (let i = 0; i < sortedList.length; i++) {
        console.log(sortedList[i].querySelector('div'))
        numberList.appendChild(sortedList[i])

    }
})