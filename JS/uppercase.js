function setUpperCase(text) {
    let arrFromText = text.split(' ');

    let uperArray = [];

    arrFromText.map(item => {
        let elem = item[0].toUpperCase() + item.slice(1);

        return uperArray.push(elem);
    })

    return text = uperArray.join(' ');

}



let title = 'The division is done by searching for a pattern; where the pattern is provided as the first parameter in the methods call'

let upperText = setUpperCase(title);

console.log(upperText);