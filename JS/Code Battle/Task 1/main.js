//Get ul  & button elements
const sortButton = document.getElementById('sort-button');
const numberList = document.getElementById('number-list');

//create array from number
let numbers = [5, 3, 1, 4, 2]
for (let item of numbers) {
    const li = document.createElement('li');
    li.innerText = item;
    // li.className = 'list_item'
    numberList.appendChild(li)
}

//Get Ul list childrens
let ul_children = numberList.children

//Create Function for sort numbers
sortButton.addEventListener('click', () => {
    const sortedList = Array.from(ul_children)
        .sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
    for (let i = 0; i < sortedList.length; i++) {
        numberList.appendChild(sortedList[i]);
    }
})