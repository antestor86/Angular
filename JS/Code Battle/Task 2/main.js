let numbers = [1, 2, 3, 4, 5]

//get next number from array
let nextNum = numbers[(numbers.length - 1)]

//get DOM elements
let button = document.getElementById('btn')
let listMain = document.getElementById('list')

//get start number for set red style in element
let startLength = numbers.length;

//create li html elements with for 
for (let item of numbers) {
    const li = document.createElement('li');
    li.innerText = item
    listMain.appendChild(li)
}


//add click function on button element where we have a function which can add new element on our list and set style on first
button.addEventListener('click', () => {
    nextNum += 1
    let child = document.createElement('li');
    child.innerText = nextNum
    console.log(nextNum)
    startLength += 1;
    // if (startLength === numbers.length + 1) {
    //      //child.style.background = 'red';
    //   listMain.appendChild(child)
    //  } else {
    //   listMain.appendChild(child)
    //  }
    listMain.appendChild(child)
    let ulList = Array.from(document.querySelectorAll('li'));
    console.log(ulList)
    for (let i in ulList) {
        if (i % 2 == 0) {
            ulList[i].style.background = 'red';

        }
    }


})