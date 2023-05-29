let circle = document.getElementById('circle')
let previousColor = "rgb(1,1,1)"

//Add eventListener to click in circle

circle.addEventListener('click', (event) => {
    previousColor = circle.style.background

    //create random rgb values
    let r = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let g = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let b = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);



    //make color for using randomly color for creating box
    let color = `${r}` + ',' + `${g}` + ',' + `${b}`;
    let left = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let top = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);

    //make box element and stylining it
    circle.style.background = 'rgb' + '(' + color + ')';
})


//make function for previous color
circle.addEventListener('contextmenu', () => {
    circle.style.background = previousColor
})