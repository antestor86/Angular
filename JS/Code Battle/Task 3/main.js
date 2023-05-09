//Get body
let body = document.getElementById('main_body');


//Add eventListener to click in body

body.addEventListener('click', (event) => {

    //create random rgb values
    let r = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let g = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let b = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);


    //make color for using randomly color for creating box
    let color = `${r}` + ',' + `${g}` + ',' + `${b}`;
    let left = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    let top = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);


    //optionally create posizitions
    // let right = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100);
    //  let bottom = parseInt(Math.random() * 100) + parseInt(Math.random() * 100) + parseInt(Math.random() * 100)


    //make box element and stylining it
    let div = document.createElement('div');
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.background = 'rgb' + '(' + color + ')';
    div.style.position = 'absolute';

    //Get event click position values and set them to our div position
    div.style.left = event.clientX + "px";
    div.style.top = event.clientY + "px";
    //Add box to our body
    body.appendChild(div)


})